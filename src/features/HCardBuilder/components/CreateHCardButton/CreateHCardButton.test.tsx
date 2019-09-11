import { shallow } from 'enzyme';
import React from 'react';
import CreateHCardButton from './CreateHCardButton';
import Button from '../Button/Button';

const setup = () => {
  const props = {};
  const wrapper = shallow(<CreateHCardButton />);
  return { wrapper, props };
};

it('renders without crashing', () => {
  const { wrapper } = setup();
  expect(wrapper).toBeDefined();
});

it('should render self and subcomponents', () => {
  const { wrapper } = setup();
  expect(wrapper.find(Button).length).toBe(1);
});

it('should render a styled Button with submit type', () => {
  const { wrapper } = setup();
  const buttonProps = wrapper.find(Button).props();
  expect(buttonProps.name).toBe('Create hCard');
  expect(buttonProps.type).toBe('submit');
  expect(typeof buttonProps.bgColor).toBe('string');
  expect(typeof buttonProps.borderColor).toBe('string');
})
