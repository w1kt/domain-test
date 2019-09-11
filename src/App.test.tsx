import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import HCardBuilder from './features/HCardBuilder/containers/HCardBuilder';

const wrapper = shallow(<App />);

it('renders without crashing', () => {
  expect(wrapper).toBeDefined();
});

it('renders a hCardBuilder', () => {
  expect(wrapper.containsMatchingElement(<HCardBuilder />));
})
