import React from "react";
import PropTypes from "prop-types";

export const OfferCard = (props) => {
  const {
    offer: {id, src, price, name, rating, type, isPremium},
    onCardClick
  } = props;

  const getPremiumMark = (premium) => {
    return premium ? (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    ) : ``;
  };

  const handleHeaderClick = (cardId) => onCardClick(cardId);

  const getRatingWidth = (ratingValue) => ratingValue || 0;

  return (
    <article className="place-card">
      {getPremiumMark(isPremium)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#" onClick={() => handleHeaderClick(id)}>
          <img className="place-card__image" src={src} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingWidth(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    isPremium: PropTypes.bool,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number
  }).isRequired,
  onCardClick: PropTypes.func.isRequired
};
