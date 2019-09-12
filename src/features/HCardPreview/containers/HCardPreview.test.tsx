import { shallow } from 'enzyme';
import React from 'react';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import HCardPreview from './HCardPreview';

const mockStore = configureMockStore();
const setup = (store: MockStoreEnhanced<unknown, {}>) => {
  const props = {};
  //@ts-ignore ts doesn't like it when we pass store directly to a container
  const wrapper = shallow(<HCardPreview store={store} />);
  return { props, wrapper };
};

it('renders without crashing', () => {
  const store = mockStore({ hCardBuilder: { avatarUrl: '' } });
  const { wrapper } = setup(store);
  expect(wrapper).toBeDefined();
});

it('should copy userDetails from form state to props if they exist', () => {
  const store = mockStore({
    hCardBuilder: { avatarUrl: '' },
    form: { hCardBuilder: { values: { email: 'test-email' } } }
  });
  const { wrapper } = setup(store);
  expect(wrapper.children().props().email).toBe('test-email');
});
