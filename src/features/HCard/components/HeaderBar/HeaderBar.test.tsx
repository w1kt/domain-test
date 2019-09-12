import React from 'react';
import { shallow } from 'enzyme';
import HeaderBar from './HeaderBar';
import Avatar from '../Avatar/Avatar';

const setup = () => {
  const props = { title: 'test-title', avatarUrl: 'test-avatar' };
  const wrapper = shallow(<HeaderBar {...props} />);
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
      .find('div')
      .first()
      .hasClass('HeaderBar')
  ).toBe(true);
  expect(wrapper.find('h1').length).toBe(1);
  expect(wrapper.find(Avatar).length).toBe(1);
});

it('should pass props to relevant subcomponents', () => {
  const { wrapper, props } = setup();
  expect(wrapper.find('h1').text()).toBe(props.title);
  expect(wrapper.find(Avatar).props().imageUrl).toBe(props.avatarUrl);
});
