import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {OfferCard} from './offer-card';

Enzyme.configure({adapter: new Adapter()});

const mockOffer = {
  id: 1, src: ``, name: ``, price: 0, type: ``
};

describe(`Offer card controls work as expected`, () => {
  it(`Click on image link executes callback with this id`, () => {
    const mockHandler = jest.fn();
    const card = mount(<OfferCard offer={mockOffer} onCardClick={mockHandler} />);
    const cardHeaderLink = card.find(`.place-card__image-wrapper a`);

    cardHeaderLink.simulate(`click`, {preventDefault() {}});
    expect(mockHandler).toBeCalledWith(mockOffer.id);
  });
});
