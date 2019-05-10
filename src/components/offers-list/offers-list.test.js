import React from 'react';
import renderer from 'react-test-renderer';

import {OffersList} from './offers-list';

const mockList = [
  {id: 0, name: `mockTitle`, src: ``, price: 0, type: ``}
];

describe(`Offers List renders correctly`, () => {
  it(`Layout matches snapshot when created`, () => {
    const layout = renderer
      .create(<OffersList offers={mockList} />)
      .toJSON();

    expect(layout).toMatchSnapshot();
  });
});
