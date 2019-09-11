import { shallow } from 'enzyme';
import React from 'react';
import GroupTitle from './GroupTitle';

const setup = () => {
  const props = { text: 'test' };
  const wrapper = shallow(<GroupTitle {...props} />);
  return { wrapper, props };
};

it('renders without crashing', () => {
  const { wrapper } = setup();
  expect(wrapper).toBeDefined();
});

it('should render self and subcomponents', () => {
  const { wrapper } = setup()
  expect(wrapper.find('h2').hasClass('GroupTitle')).toBe(true);
})

it('should display the text prop in a h2 tag', () => {
  const { wrapper, props } = setup();
  expect(wrapper.find('h2').text()).toBe(props.text);
});
