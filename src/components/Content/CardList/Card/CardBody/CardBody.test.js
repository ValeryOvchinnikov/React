import React from 'react';

import { shallow } from 'enzyme';

import CardBody from './CardBody';

describe('<CardBody/>', () => {
  let wrapper;
  const props = {
    onChange: jest.fn(),
    text: 'HI',
    isEditMode: false,
  };
  beforeEach(() => {
    wrapper = shallow(<CardBody {...props} />);
  });

  it('should render <p/> if not editmode', () => {
    expect(wrapper.find('p').hasClass('card-text')).toEqual(true);
  });

  it('should render <textarea/> if editmode', () => {
    wrapper.setProps({ isEditMode: true });
    expect(wrapper.find('textarea').hasClass('input-text')).toEqual(true);
  });
});
