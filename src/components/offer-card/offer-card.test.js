import React from 'react';
import renderer from 'react-test-renderer';

import {OfferCard} from './offer-card';

const mockOffer = {
  id: 0, src: ``, price: 0, name: ``, type: ``
};

describe(`Offer Card renders correctly`, () => {
  it(`Layout matches snapshot when created`, () => {
    const layout = renderer
      .create(<OfferCard offer={mockOffer} />)
      .toJSON();

    expect(layout).toMatchSnapshot();
  });
});
