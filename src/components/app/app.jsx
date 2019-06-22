import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

import Map from '../map/map.jsx';
import OffersList from '../offers-list/offers-list.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import withSelectableItem from '../../hocs/with-selectable-item/with-selectable-item.jsx';

export const App = (props) => {
  const {offers, onCardClick} = props;

  const SelectableCitiesList = withSelectableItem(0)(CitiesList);
  const SelectableOffersList = withSelectableItem()(OffersList);

  const composeInfoString = () => offers.length ?
    `${offers.length} places to stay in ${offers[0].city}` :
    `No offers found`;

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <SelectableCitiesList />
      <div className="cities__places-wrapper">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{composeInfoString()}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                  Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
            <div className="tabs__content">
              <SelectableOffersList onCardClick={onCardClick}/>
            </div>
          </section>
          <div className="cities__right-section">
            <Map />
          </div>
        </div>
      </div>
    </main>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        isPremium: PropTypes.bool,
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number,
        city: PropTypes.string
      })).isRequired,
  onCardClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({offers: state.offers});

export default connect(mapStateToProps)(App);
