import React from 'react';
import renderer from 'react-test-renderer';

import {CitiesList} from './cities-list';

const cities = [
  {id: 0, title: `Rome`},
  {id: 1, title: `Oslo`}
];

describe(`Cities renders correctly`, () => {
  it(`Layout matches snapshot when created`, () => {
    const layout = renderer
      .create(<CitiesList cities={cities} onItemSelect={jest.fn} onCitySelect={jest.fn} selectedId={0} />)
      .toJSON();

    expect(layout).toMatchSnapshot();
  });
});
