import React from 'react';
import renderer from 'react-test-renderer';

import {Map} from './map.jsx';

/**
 * @jest-environment jsdom
 */

describe(`Map works`, () => {
  it(`Maps renders`, () => {
    const div = document.createElement(`div`);
    div.setAttribute(`id`, `map`);
    document.body.appendChild(div);

    const layout = renderer
      .create(<Map />)
      .toJSON();

    expect(layout).toMatchSnapshot();
  });
});
