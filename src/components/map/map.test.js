import React from 'react';
import renderer from 'react-test-renderer';

import {Map} from './map.jsx';

describe(`Map component renders correctly`, () => {
  it(`Layout matches snapshot when created`, () => {
    const layout = renderer
      .create(<Map />)
      .toJSON();

    expect(layout).toMatchSnapshot();
  });
});
