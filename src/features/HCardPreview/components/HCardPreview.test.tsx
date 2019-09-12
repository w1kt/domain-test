import React from 'react';
import { shallow } from 'enzyme';
import HCardPreview from '../components/HCardPreview';
import ComponentPreview from '../../ComponentPreview/components/ComponentPreview';
import HCard from '../../HCard/components/HCard';

const setup = () => {
  const props = { avatarUrl: 'test' };
  const wrapper = shallow(<HCardPreview {...props} />);
  return { props, wrapper };
};

it('renders without crashing', () => {
  const { wrapper } = setup();
  expect(wrapper).toBeDefined();
});

it('renders self and subcomponents', () => {
  const { wrapper } = setup();
  expect(wrapper.find(ComponentPreview).length).toBe(1);
  expect(wrapper.find(HCard).length).toBe(1);
});

it('should forward its props to the HCard', () => {
  const { wrapper, props } = setup();
  expect(wrapper.find(HCard).props()).toEqual(props);
})
