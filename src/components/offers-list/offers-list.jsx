import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {OfferCard} from '../offer-card/offer-card.jsx';

export class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCardId: null,
    };
  }

  handleMouseEnter(event, id) {
    this.setActiveCard(id);
  }

  setActiveCard(cardId) {
    const {activeCardId} = this.state;

    if (activeCardId !== cardId) {
      this.setState({activeCardId: cardId});
    }
  }

  render() {
    const {activeCardId} = this.state;
    const {offers, onCardClick} = this.props;

    return (
      <div className="cities__places-list places__list">
        {offers.map((card) => {
          const {id} = card;
          return (
            <div
              className={`cities__place-card ${activeCardId === id ? `active` : ``}`}
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
  onCardClick: PropTypes.func.isRequired,
};
