import React from 'react';
import { shallow } from 'enzyme';
import CardItem from './CardItem';

const setup = () => {
  const props = {
    label: 'test-label',
    value: 'test-val',
    extraLines: ['line1', 'line2'],
    inline: false
  };
  const wrapper = shallow(<CardItem {...props} />);
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
      .hasClass('CardItem')
  ).toBe(true);
});

it('should pass props to relevant subcomponents', () => {
  const { wrapper, props } = setup();
  expect(wrapper.find('.card-item-label').text()).toBe(props.label);
  expect(wrapper.find('.card-item-value').text()).toBe(props.value);
  expect(
    wrapper
      .find('.card-item-extra-value')
      .first()
      .text()
  ).toBe(props.extraLines[0]);
});

it('should create extra lines based on the extraLine prop', () => {
  const { wrapper, props } = setup();
  expect(
    wrapper
      .find('.card-item-extra-value')
      .length
  ).toBe(props.extraLines.length);
})

it('should apply the inline class when inline prop is true', () => {
  const { wrapper, props } = setup();
  expect(wrapper.find('.CardItem').hasClass('inline')).toBe(false);
  const wrapper2 = shallow(<CardItem {...props} inline={true} />);
  expect(wrapper2.find('.CardItem').hasClass('inline')).toBe(true);
})
