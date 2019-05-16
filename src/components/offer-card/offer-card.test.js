import React from 'react';
import renderer from 'react-test-renderer';

import {OfferCard} from './offer-card';

const mockOffer = {
  id: 0, src: ``, price: 0, name: ``, type: ``
};
const mockHandler = () => {};

describe(`Offer Card renders correctly`, () => {
  it(`Layout matches snapshot when created`, () => {
    const layout = renderer
      .create(<OfferCard offer={mockOffer} onCardClick={mockHandler} />)
      .toJSON();

    expect(layout).toMatchSnapshot();
  });
});
