import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import HCardBuilder from './features/HCardBuilder/containers/HCardBuilder';

const setup = () => {
  const props = {};
  const wrapper = shallow(<App />);
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
      .hasClass('App')
  ).toBe(true);
  expect(wrapper.containsMatchingElement(<HCardBuilder />));
});
