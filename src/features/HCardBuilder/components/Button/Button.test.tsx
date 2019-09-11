import { shallow } from 'enzyme';
import React from 'react';
import Button, { ButtonProps } from './Button';

const setup = (buttonType: ButtonProps['type'] = 'submit') => {
  const props = {
    name: 'test',
    bgColor: '#000',
    borderColor: '#fff',
    type: buttonType
  };
  const wrapper = shallow(<Button {...props} />);
  return { wrapper, props };
};

it('renders without crashing', () => {
  const { wrapper } = setup();
  expect(wrapper).toBeDefined();
});

it('should render self and subcomponents', () => {
  const { wrapper } = setup();
  expect(wrapper.find('button').hasClass('Button')).toBe(true);
});

it('should use the name prop for the button text', () => {
  const { wrapper, props } = setup();
  expect(wrapper.find('button').text()).toBe(props.name);
});

it('should use style related props for button styling', () => {
  const { wrapper, props } = setup();
  expect(wrapper.find('button').props().style).toEqual({
    backgroundColor: props.bgColor,
    borderColor: props.borderColor
  });
});

it('should default type to "button" if no type prop passed', () => {
  let { wrapper } = setup('' as any);
  expect(wrapper.find('button').props().type).toBe('button');
});

it('should set type of button to type prop that was passed', () => {
  let { wrapper } = setup('reset');
  expect(wrapper.find('button').props().type).toBe('reset');
});