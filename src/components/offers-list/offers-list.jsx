import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {OfferCard} from '../offer-card/offer-card.jsx';
import {ActionCreator} from '../../reducer';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.offers,
  selectedOfferId: state.selectedOfferId
});

const mapDispatchToProps = (dispatch) => ({
  onCardSelect: (id) => dispatch(ActionCreator.selectOffer(id))
});

export class OffersList extends PureComponent {
  constructor(props) {
    super(props);
  }

  handleMouseEnter(event, id) {
    this.setActiveCard(id);
  }

  setActiveCard(cardId) {
    const {selectedOfferId} = this.props;

    if (selectedOfferId !== cardId) {
      this.props.onCardSelect();
    }
  }

  render() {
    const {offers, onCardClick, selectedOfferId} = this.props;

    return (
      <div className="cities__places-list places__list">
        {offers.map((card) => {
          const {id} = card;
          return (
            <div
              className={`cities__place-card ${selectedOfferId === id ? `active` : ``}`}
              key={id}
              onMouseEnter={(e) => this.handleMouseEnter(e, id)}>
              <OfferCard offer={card} onCardClick={onCardClick} />
            </div>
          );
        })}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        isPremium: PropTypes.bool,
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number,
      })).isRequired,
  selectedOfferId: PropTypes.number,
  onCardClick: PropTypes.func.isRequired,
  onCardSelect: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
