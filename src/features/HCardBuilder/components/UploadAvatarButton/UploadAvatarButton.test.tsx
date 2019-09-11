import { shallow } from 'enzyme';
import React from 'react';
import FileInputButton from '../FileInputButton/FileInputButton';
import UploadAvatarButton from './UploadAvatarButton';

const setup = () => {
  const props = { setAvatar: jest.fn() };
  const wrapper = shallow(<UploadAvatarButton {...props} />);
  return { wrapper, props };
};

it('renders without crashing', () => {
  const { wrapper } = setup();
  expect(wrapper).toBeDefined();
});

it('should render self and subcomponents', () => {
  const { wrapper } = setup();
  expect(wrapper.find(FileInputButton).length).toBe(1);
});

it('should render a styled FileInputButton that only accept images', () => {
  const { wrapper } = setup();
  const buttonProps = wrapper.find(FileInputButton).props();
  expect(buttonProps.name).toBe('Upload Avatar');
  expect(typeof buttonProps.bgColor).toBe('string');
  expect(typeof buttonProps.borderColor).toBe('string');
  expect(buttonProps.accept).toBe('image/*');
});

it('should invoke the setAvatar method when onFileUpload is called', () => {
  const { wrapper, props } = setup();
  wrapper.find(FileInputButton).props().onFileUpload(); 
  expect(props.setAvatar).toHaveBeenCalledTimes(1);
})
