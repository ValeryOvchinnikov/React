import React from 'react';

import { shallow } from 'enzyme';

import CardHeader from './CardHeader';

describe('<CardHeader/>', () => {
  let wrapper;
  const props = {
    title: '',
    isEditMode: false,
    isChecked: jest.fn(),
    isReadOnly: false,
    onSave: jest.fn(),
    onCancel: jest.fn(),
    onChange: jest.fn(),
    onChecked: jest.fn(),
    onSwitchEditMode: jest.fn(),
  };
  beforeEach(() => {
    wrapper = shallow(<CardHeader {...props} />);
  });

  it('should render <p/> if not editmode', () => {
    expect(wrapper.find('h4').hasClass('card-title')).toEqual(true);
  });

  it('should render <textarea/> if editmode', () => {
    wrapper.setProps({ isEditMode: true });
    expect(wrapper.find('input').hasClass('input-title')).toEqual(true);
  });
});
