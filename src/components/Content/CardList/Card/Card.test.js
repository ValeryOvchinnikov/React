import React from 'react';
import { shallow } from 'enzyme';
import { Card, mapStateToProps } from './Card';
import CardHeader from './CardHeader/CardHeader';
import CardBody from './CardBody/CardBody';

describe('<Card/>', () => {
  let wrapper;
  const props = {
    id: '001',
    title: '',
    text: '',
    selected: false,
    updateCard: jest.fn(),
    selectCard: jest.fn(),
    dblClick: jest.fn(),
    isReadOnly: false,
    byId: false,
  };

  beforeEach(() => {
    wrapper = shallow(<Card {...props} />);
  });

  it('should save changes successfully', () => {
    wrapper.setState({ isEditMode: true });
    wrapper.find(CardHeader).props().onSave();
    expect(wrapper.state('isEditMode')).toBe(false);
  });

  it('should cancel changes successfully', () => {
    const instance = wrapper.instance();
    wrapper.setState({ isEditMode: true });
    wrapper.setProps({ text: 'text in props', title: 'title in props' });
    instance.cancelChanges();
    expect(wrapper.state().isEditMode).toEqual(false);
    expect(wrapper.state('text')).toBe('text in props');
    expect(wrapper.state('title')).toBe('title in props');
  });

  it('should set selected false if was true before switchEditMode invoke', () => {
    wrapper.setState({ selected: true });
    const instance = wrapper.instance();
    const checkHandlerSpy = jest.spyOn(instance, 'checkHandler');
    instance.switchEditMode();
    expect(checkHandlerSpy).toHaveBeenCalled();
  });

  it('if selected and byId are true, should invoke checkHandler in componentDidMount', () => {
    const instance = wrapper.instance();
    const checkHandlerSpy = jest.spyOn(instance, 'checkHandler');
    wrapper.setProps({ byId: true });
    wrapper.setState({ selected: true });
    instance.componentDidMount();
    expect(checkHandlerSpy).toHaveBeenCalled();
  });

  it('if editMode and readOnly are true, should invoke cancelChanges in componentDidUpdate', () => {
    const instance = wrapper.instance();
    const cancelHandlerSpy = jest.spyOn(instance, 'cancelChanges');
    wrapper.setProps({ isReadOnly: true });
    wrapper.setState({ isEditMode: true });
    instance.componentDidUpdate();
    expect(cancelHandlerSpy).toHaveBeenCalled();
  });

  it('should set state for title and text with right value', () => {
    wrapper
      .find(CardHeader)
      .props()
      .onChange({ target: { value: 'test title' } });
    wrapper
      .find(CardBody)
      .props()
      .onChange({ target: { value: 'test text' } });

    expect(wrapper.state('title')).toBe('test title');
    expect(wrapper.state('text')).toBe('test text');
  });

  it('mapToStateProps should return right value', () => {
    const mockedState = {
      cards: {
        isReadOnly: false,
      },
    };
    const state = mapStateToProps(mockedState);
    expect(state.isReadOnly).toBeFalsy();
  });
});
