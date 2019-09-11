import { shallow } from 'enzyme';
import React from 'react';
import GroupTitle from '../GroupTitle/GroupTitle';
import FormField from './FormField';
import FieldLabel from '../FieldLabel/FieldLabel';

const setup = () => {
  const props = { label: 'test' };
  const wrapper = shallow(
    <FormField {...props}>
      <div></div>
    </FormField>
  );
  return { wrapper, props };
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
      .hasClass('FormField')
  ).toBe(true);
  expect(wrapper.find(FieldLabel).length).toBe(1);
});

it('passes the text prop to FieldLabel', () => {
  const { wrapper, props } = setup();
  const fieldLabelProps = wrapper.find(FieldLabel).props();
  expect(fieldLabelProps.text).toBe(props.label);
});

it('renders the elements passed as children', () => {
  const { wrapper } = setup();
  const formField = wrapper.find('.FormField');
  expect(formField.containsMatchingElement(<div></div>)).toBe(true);
});
