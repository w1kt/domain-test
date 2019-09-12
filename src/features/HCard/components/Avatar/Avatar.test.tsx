import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../Avatar/Avatar';

const setup = () => {
  const props = { imageUrl: 'test' };
  const wrapper = shallow(<Avatar {...props} />);
  return { props, wrapper };
};

it('renders without crashing', () => {
  const { wrapper } = setup();
  expect(wrapper).toBeDefined();
});

it('renders self and subcomponents', () => {
  const { wrapper } = setup();
  expect(
    wrapper
      .find('img')
      .first()
      .hasClass('Avatar')
  ).toBe(true);
});

it('should pass props to relevant subcomponents', () => {
  const { wrapper, props } = setup();
  expect(wrapper.find('img').props().src).toBe(props.imageUrl);
});

it('should default avatar to some image', () => {
  const wrapper = shallow(<Avatar />);
  expect(wrapper.find('img').props().src).toBeTruthy();
});
