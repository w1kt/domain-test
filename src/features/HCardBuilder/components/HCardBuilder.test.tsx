import { shallow } from 'enzyme';
import React from 'react';
import { HCardBuilder } from './HCardBuilder';
import Title from './Title/Title';
import FormGroup from './FormGroup/FormGroup';
import TextFormField from './TextFormField/TextFormField';
import UploadAvatarButton from './UploadAvatarButton/UploadAvatarButton';
import CreateHCardButton from './CreateHCardButton/CreateHCardButton';

const setup = () => {
  const props = {
    handleSubmit: jest.fn(),
    setAvatar: jest.fn()
  } as any; // any here to avoid typeError with InjectFormProps from redux-form
  const wrapper = shallow(<HCardBuilder {...props} />);
  return { props, wrapper };
};

it('renders without crashing', () => {
  const { wrapper } = setup();
  expect(wrapper).toBeDefined();
});

it('renders self and subcomponents', () => {
  const { wrapper } = setup();
  expect(wrapper.find('form').hasClass('HCardBuilder')).toBe(true);
  const titleProps = wrapper.find(Title).props();
  expect(titleProps.text).toBe('hCard Builder');
  expect(wrapper.find(FormGroup).length).toBe(2);
  expect(wrapper.find(TextFormField).length).toBe(10);
  expect(wrapper.find(UploadAvatarButton).length).toBe(1);
  expect(wrapper.find(CreateHCardButton).length).toBe(1);
});

it('attaches handleSubmit to form', () => {
  const { props, wrapper } = setup();
  const form = wrapper.find('form').first();
  form.simulate('submit');
  expect(props.handleSubmit).toHaveBeenCalledTimes(1);
});

it('attaches setAvatar to UploadAvatarButton', () => {
  const { props, wrapper } = setup();
  const buttonProps = wrapper.find(UploadAvatarButton).props();
  expect(buttonProps.setAvatar).toBe(props.setAvatar);
});
