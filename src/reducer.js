import {offers} from './mocks/offers';

const MAX_CITIES_NUM = 6;

const extractCities = (offersList) => {
  const uniqueCities = [
    ...offersList.reduce((acc, offer) => acc.add(offer.city), new Set())
  ];

  return uniqueCities
    .map((cityName, index) => ({id: index, title: cityName}))
    .filter((city, index) => index < MAX_CITIES_NUM);
};

const initialState = {
  offers,
  cities: extractCities(offers)
};

const getOffersByCity = (offersList, cityTitle) => {
  return offersList.filter((offer) => offer.city === cityTitle);
};

const ActionCreator = {
  getOffers: (city) => ({
    type: `GET_OFFERS`,
    payload: getOffersByCity(initialState.offers, city)
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      return Object.assign({}, state, {
        selectedCityId: action.payload
      });
    case `SELECT_OFFER`:
      return Object.assign({}, state, {
        selectedOfferId: action.payload
      });
    case `GET_OFFERS`:
      return Object.assign({}, state, {
        offers: action.payload
      });
    default:
      return state;
  }
};

export {ActionCreator, reducer};
