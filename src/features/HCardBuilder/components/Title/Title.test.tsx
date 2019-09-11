import { shallow } from 'enzyme';
import React from 'react';
import Title from './Title';

const setup = () => {
  const props = { text: 'test' };
  const wrapper = shallow(<Title {...props} />);
  return { wrapper, props };
};

it('renders without crashing', () => {
  const { wrapper } = setup();
  expect(wrapper).toBeDefined();
});

it('should render self and subcomponents', () => {
  const { wrapper } = setup()
  expect(wrapper.find('h1').hasClass('Title')).toBe(true);
})

it('should display the text prop in a h1 tag', () => {
  const { wrapper, props } = setup();
  expect(wrapper.find('h1').text()).toBe(props.text);
});
