import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from './app.jsx';

Enzyme.configure({adapter: new Adapter()});

const mockCards = [
  {id: 0, title: `mockTitle`}
];

describe(`Card link works as expected`, () => {
  it(`Click on card link executes onCardClick callback`, () => {
    const mockClickHandler = jest.fn();
    const app = shallow(<App cards={mockCards} onCardClick={mockClickHandler} />);
    const cardHeaderLink = app.find(`.place-card__image-wrapper a`);

    cardHeaderLink.simulate(`click`, {preventDefault() {}});
    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });
});


