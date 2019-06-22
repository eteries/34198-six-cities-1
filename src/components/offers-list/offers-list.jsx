import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {OfferCard} from '../offer-card/offer-card.jsx';
import {connect} from 'react-redux';

export class OffersList extends PureComponent {
  handleMouseEnter(event, id) {
    const {onItemSelect} = this.props;

    if (typeof onItemSelect === `function`) {
      onItemSelect(id);
    }
  }

  render() {
    const {offers, onCardClick, selectedId} = this.props;

    // eslint-disable-next-line no-console
    console.log(selectedId);

    return (
      <div className="cities__places-list places__list">
        {offers.map((card) => {
          const {id} = card;
          return (
            <div
              className={`cities__place-card ${selectedId === id ? `active` : ``}`}
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
  selectedId: PropTypes.number,
  onCardClick: PropTypes.func.isRequired,
  onItemSelect: PropTypes.func
};

const mapStateToProps = (state) => ({
  offers: state.offers
});

export default connect(mapStateToProps)(OffersList);
