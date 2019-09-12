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
});

it('should create a FormField with a render prop that creates a Field', () => {
  const { wrapper } = setup();
  const fieldWrapper = wrapper.find(FormField).renderProp('render')(
    'test-id'
  );
  expect(fieldWrapper.find(Field).length).toBe(1);
});

it('should create Field with appropriate props', () => {
  const { wrapper } = setup();
  const fieldWrapper = wrapper.find(FormField).renderProp('render')(
    'test-id'
  );
  const fieldProps = fieldWrapper.find(Field).props();
  expect(fieldProps.component).toBe('input');
  expect(fieldProps.type).toBe('text');
  expect(fieldProps.id).toBe('test-id');
  expect(fieldProps.name).toBe('test-id');
})

it('should pass its props to the FormField', () => {
  const { wrapper, props } = setup();
  const formFieldProps = wrapper.find(FormField).props();
  expect(formFieldProps.label).toBe(props.label);
});
