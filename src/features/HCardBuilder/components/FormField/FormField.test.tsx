import { shallow } from 'enzyme';
import React from 'react';
import helpers from '../../../../helpers/helpers';
import FieldLabel from '../FieldLabel/FieldLabel';
import FormField from './FormField';

const setup = () => {
  const props = { label: 'Test Label', render: jest.fn()};
  const wrapper = shallow(<FormField {...props} />);
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

it('passes correct props to FieldLabel', () => {
  const { wrapper, props } = setup();
  const fieldLabelProps = wrapper.find(FieldLabel).props();
  expect(fieldLabelProps.text).toBe(props.label);
  expect(fieldLabelProps.id).toBe(helpers.createIDFromLabel(props.label));
});

it('should have invoke a function to format label into an id', () => {
  const spy = jest.spyOn(helpers, 'createIDFromLabel');
  const { props } = setup();
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith(props.label);
});

it('should invoke its render prop', () => {
  const { props } = setup();
  expect(props.render).toBeCalledTimes(1);
})