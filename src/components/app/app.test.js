import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

const mockCards = [
  {id: 0, title: `mockTitle`}
];

describe(`App renders correctly`, () => {
  it(`Layout matches snapshot when created`, () => {
    const layout = renderer
      .create(<App cards={mockCards} />)
      .toJSON();
    expect(layout).toMatchSnapshot();
  });
});
