import { shallow } from 'enzyme';
import React from 'react';
import FormGroup from './FormGroup';
import GroupTitle from '../GroupTitle/GroupTitle';

const setup = () => {
  const props = { groupTitle: 'test' };
  const wrapper = shallow(
    <FormGroup {...props}>
      <div></div>
    </FormGroup>
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
      .hasClass('FormGroup')
  ).toBe(true);
  expect(wrapper.find(GroupTitle).length).toBe(1);
});

it('passes the text prop to GroupTitle', () => {
  const { wrapper, props } = setup();
  const groupTitleProps = wrapper.find(GroupTitle).props();
  expect(groupTitleProps.text).toBe(props.groupTitle);
});

it('renders the elements passed as children', () => {
  const { wrapper } = setup();
  const flexGrid = wrapper.find('.flex-grid');
  expect(flexGrid.containsMatchingElement(<div></div>)).toBe(true);
});
