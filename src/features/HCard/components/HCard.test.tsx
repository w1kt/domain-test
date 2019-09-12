import { shallow } from 'enzyme';
import React from 'react';
import HCard from '../../HCard/components/HCard';
import CardItem from './CardItem/CardItem';
import HeaderBar from './HeaderBar/HeaderBar';

const setup = () => {
  const userDetails = {
    'given-name': 'test-name',
    surname: 'test-surname',
    phone: 'test-phone',
    'house-name-or-#': 'test-housenum',
    street: 'test-street',
    suburb: 'test-suburb',
    state: 'test-state',
    postcode: 'test-postcode',
    country: 'test-country'
  };
  const props = {
    ...userDetails,
    avatarUrl: 'test-avatar'
  };
  const wrapper = shallow(<HCard {...props} />);
  return { props, wrapper, userDetails };
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
      .hasClass('HCard')
  ).toBe(true);
  expect(wrapper.find(HeaderBar).length).toBe(1);
  expect(wrapper.find(CardItem).length).toBe(5);
});

it('should have invoked a method to replace missing user details with empty strings', () => {
  const spy = jest.spyOn(HCard.prototype, 'getUserDetails');
  const { wrapper } = setup();
  expect(spy).toHaveBeenCalledTimes(1);
  expect(
    wrapper.containsMatchingElement(
      <CardItem label="Email" value=""></CardItem>
    )
  ).toBe(true);
});

it('should have invoked a method that can add a comma in between address values', () => {
  jest.spyOn(HCard.prototype, 'separateByComma');
  const { wrapper, userDetails } = setup();
  let addressProps = wrapper.find('[label="Address"]').props() as any;
  expect(addressProps.extraLines).toEqual([
    `${userDetails.suburb}, ${userDetails.state}`
  ]);

  const wrapper2 = shallow(<HCard suburb="test-suburb" />);
  addressProps = wrapper2.find('[label="Address"]').props() as any;
  expect(addressProps.extraLines).toEqual(['test-suburb']);

  const wrapper3 = shallow(<HCard state="test-state" />);
  addressProps = wrapper3.find('[label="Address"]').props() as any;
  expect(addressProps.extraLines).toEqual(['test-state']);
});
