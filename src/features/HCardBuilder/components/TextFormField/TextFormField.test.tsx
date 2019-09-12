import { shallow } from 'enzyme';
import React from 'react';
import { Field } from 'redux-form';
import FormField from '../FormField/FormField';
import TextFormField from './TextFormField';

const setup = () => {
  const props = { label: 'Test Label' };
  const wrapper = shallow<TextFormField>(<TextFormField {...props} />);
  return { wrapper, props };
};

it('renders without crashing', () => {
  const { wrapper } = setup();
  expect(wrapper).toBeDefined();
});

it('should render self and subcomponents', () => {
  const { wrapper } = setup();
  expect(wrapper.find(FormField).length).toBe(1);
  expect(wrapper.find(Field).hasClass('TextInput')).toBe(true);
  const fieldProps = wrapper.find(Field).props();
  expect(fieldProps.component).toBe('input');
  expect(fieldProps.type).toBe('text');
});

it('should pass its props to the FormField', () => {
  const { wrapper, props } = setup();
  const formFieldProps = wrapper.find(FormField).props();
  expect(formFieldProps.label).toBe(props.label);
});

it('should have formatted the label into a form field name', () => {
  jest.spyOn(TextFormField.prototype, 'createNameFromLabel');
  const { wrapper, props } = setup();
  const func = TextFormField.prototype.createIDFromLabel;
  expect(func).toHaveBeenCalledTimes(1);
  expect(func).toHaveBeenCalledWith(props.label);
  const expectedReturn = 'test-label';
  expect(func).toHaveReturnedWith(expectedReturn);
  expect(wrapper.find(Field).props().name).toBe(expectedReturn);
});
