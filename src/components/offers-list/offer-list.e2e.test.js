import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {OffersList} from './offers-list.jsx';

Enzyme.configure({adapter: new Adapter()});

const mockList = [{
  id: 0, src: ``, name: ``, price: 0, type: ``
}];

describe(`Offer list's state changes correctly`, () => {
  it(`When mouse enters item, state.activeCardId gets item's Id`, () => {
    const list = mount(<OffersList offers={mockList} />);
    const item = list.find(`.cities__place-card`).first();

    expect(list.state(`activeCardId`)).toBe(null);
    item.simulate(`mouseEnter`);
    expect(list.state(`activeCardId`)).toBe(mockList[0].id);
  });

  it(`When mouse enters item, item gets .active class`, () => {
    const list = mount(<OffersList offers={mockList} />);
    const getFirstItem = () => list.find(`.cities__place-card`).first();

    expect(getFirstItem().hasClass(`active`)).toBe(false);
    getFirstItem().simulate(`mouseEnter`);
    expect(getFirstItem().hasClass(`active`)).toBe(true);
  });
});
