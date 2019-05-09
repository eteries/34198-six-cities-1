import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

const mockCards = [
  {id: 0, name: `mockTitle`, src: ``, price: 0, type: ``}
];

describe(`App renders correctly`, () => {
  it(`Layout matches snapshot when created`, () => {
    const layout = renderer
      .create(<App offers={mockCards} />)
      .toJSON();
    expect(layout).toMatchSnapshot();
  });
});
