import React from 'react';
import renderer from 'react-test-renderer';

import {Map} from './map.jsx';

const mockOffers = [
  {id: 0, name: `mockTitle`, src: ``, price: 0, type: ``, city: `mockCity`}
];

describe(`Map component renders correctly`, () => {
  it(`Layout matches snapshot when created`, () => {
    const layout = renderer
      .create(<Map offers={mockOffers}/>)
      .toJSON();

    expect(layout).toMatchSnapshot();
  });
});
