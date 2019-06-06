import {reducer} from './reducer';

describe(`Reducer works as expected`, () => {
  it(`One can change city by providing id`, () => {
    const state = {
      selectedCityId: 0,
      cities: [
        {id: 0, title: `Rome`},
        {id: 1, title: `Oslo`}
      ]
    };
    const expectedState = {
      selectedCityId: 1,
      cities: [
        {id: 0, title: `Rome`},
        {id: 1, title: `Oslo`}
      ]
    };
    expect(reducer(state, {type: `CHANGE_CITY`, payload: 1}))
      .toEqual(expectedState);
  });

  it(`One can select offer by providing id`, () => {
    const state = {
      selectedOfferId: 0,
      offers: [
        {id: 0, name: `mockTitle`, src: ``, price: 0, type: ``, city: `mockCity`},
        {id: 1, name: `mockTitle`, src: ``, price: 0, type: ``, city: `mockCity`}
      ]
    };
    const expectedState = {
      selectedOfferId: 1,
      offers: [
        {id: 0, name: `mockTitle`, src: ``, price: 0, type: ``, city: `mockCity`},
        {id: 1, name: `mockTitle`, src: ``, price: 0, type: ``, city: `mockCity`}
      ]
    };
    expect(reducer(state, {type: `SELECT_OFFER`, payload: 1}))
      .toEqual(expectedState);
  });

  it(`One can filter offers by selected city's name`, () => {
    const state = {
      offers: [
        {id: 0, name: `mockTitle`, src: ``, price: 0, type: ``, city: `Rome`},
        {id: 1, name: `mockTitle`, src: ``, price: 0, type: ``, city: `Oslo`}
      ]
    };
    const expectedState = {
      offers: [
        {id: 0, name: `mockTitle`, src: ``, price: 0, type: ``, city: `Rome`}
      ]
    };
    expect(reducer(state, {type: `GET_OFFERS`, payload: [
      {id: 0, name: `mockTitle`, src: ``, price: 0, type: ``, city: `Rome`}
    ]}))
      .toEqual(expectedState);
  });
});
