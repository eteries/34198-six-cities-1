import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {OfferCard} from '../offer-card/offer-card.jsx';

export class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCardId: null,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseEnter(event, id) {
    this.setActiveCard(id);
  }

  setActiveCard(cardId) {
    if (this.state.activeCardId !== cardId) {
      this.setState(() => ({activeCardId: cardId}));
    }
  }

  render() {
    return (
      <div className="cities__places-list places__list">
        {this.props.offers.map((card) => (
          <div
            className={`cities__place-card ${this.state.activeCardId === card.id ? `active` : ``}`}
            key={card.id}
            onMouseEnter={(e) => this.handleMouseEnter(e, card.id)}>
            <OfferCard offer={card} onCardClick={this.props.onCardClick} />
          </div>
        ))}
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
  onCardClick: PropTypes.func,
};
