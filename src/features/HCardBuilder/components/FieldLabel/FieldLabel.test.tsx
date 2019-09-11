import { shallow } from 'enzyme';
import React from 'react';
import FieldLabel from './FieldLabel';

const setup = () => {
  const props = { text: 'test' };
  const wrapper = shallow(<FieldLabel {...props} />);
  return { wrapper, props };
};

it('renders without crashing', () => {
  const { wrapper } = setup();
  expect(wrapper).toBeDefined();
});

it('should render self and subcomponents', () => {
  const { wrapper } = setup()
  expect(wrapper.find('label').hasClass('FieldLabel')).toBe(true);
})

it('should display the text prop in a label tag', () => {
  const { wrapper, props } = setup();
  expect(wrapper.find('label').text()).toBe(props.text);
});
