import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import HCardBuilder from './features/HCardBuilder/containers/HCardBuilder';
import HCardPreview from './features/HCardPreview/containers/HCardPreview';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

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
  expect(wrapper.containsMatchingElement(<HCardPreview />));
});

it('renders correctly', () => {
  const mockStore = configureMockStore();
  const store = mockStore({ hCardBuilder: { avatarUrl: '' } });

  const tree = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
