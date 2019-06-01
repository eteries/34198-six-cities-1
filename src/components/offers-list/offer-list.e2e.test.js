import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {OffersList} from './offers-list.jsx';

Enzyme.configure({adapter: new Adapter()});

const mockList = [
  {id: 0, src: ``, name: ``, price: 0, type: ``, city: ``},
  {id: 1, src: ``, name: ``, price: 0, type: ``, city: ``}
];
const mockHandler = () => {};
const onSelect = jest.fn();

describe(`Offer list handle its callbacks`, () => {
  it(`When mouse enters item, onSelect is calling`, () => {
    const list = mount(<OffersList
      offers={mockList}
      onCardClick={mockHandler}
      onCardSelect={onSelect} />);
    const getFirstItem = () => list.find(`.cities__place-card`).at(0);
    const getSecondItem = () => list.find(`.cities__place-card`).at(1);

    getFirstItem().simulate(`mouseEnter`);
    expect(onSelect).toHaveBeenCalledTimes(1);

    getSecondItem().simulate(`mouseEnter`);
    expect(onSelect).toHaveBeenCalledTimes(2);
  });
});

