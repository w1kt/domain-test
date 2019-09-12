/* eslint jsx-a11y/heading-has-content: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import ComponentPreview from './ComponentPreview';

const setup = () => {
  const props = { name: 'test' };
  const wrapper = shallow(
    <ComponentPreview {...props}>
      <div className="test"></div>
    </ComponentPreview>
  );
  return { props, wrapper };
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
      .hasClass('ComponentPreview')
  ).toBe(true);
  expect(wrapper.containsMatchingElement(<h2/>));
});

it('should render the preview name in a header', () => {
  const { wrapper, props } = setup();
  expect(wrapper.find('h2').text()).toBe(props.name);
});

it('should render the wrapped children', () => {
  const { wrapper } = setup();
  expect(wrapper.containsMatchingElement(<div className="test"></div>));
});
