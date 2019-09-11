import { shallow } from 'enzyme';
import React from 'react';
import FileInputButton from './FileInputButton';

const setup = () => {
  const props = {
    name: 'test',
    bgColor: '#000',
    borderColor: '#fff',
    onFileUpload: jest.fn(),
    accept: 'image/*'
  };
  const wrapper = shallow(<FileInputButton {...props} />);
  return { wrapper, props };
};

it('renders without crashing', () => {
  const { wrapper } = setup();
  expect(wrapper).toBeDefined();
});

it('should render self and subcomponents', () => {
  const { wrapper, props } = setup();
  expect(
    wrapper
      .find('div')
      .first()
      .hasClass('Button')
  ).toBe(true);
  expect(wrapper.find('label').length).toBe(1);
  expect(wrapper.find('input').length).toBe(1);
});

it('should use the name prop for the button text', () => {
  const { wrapper, props } = setup();
  expect(wrapper.find('label').text()).toBe(props.name);
});

it('should use style related props for button styling', () => {
  const { wrapper, props } = setup();
  expect(wrapper.find('.Button').props().style).toEqual({
    backgroundColor: props.bgColor,
    borderColor: props.borderColor
  });
});

it('should limit file type that is uploaded with accept tag', () => {
  const { wrapper, props } = setup();
  expect(wrapper.find('input').props().accept).toBe(props.accept);
});

it('should invoke handleChange method when a file is uploaded', () => {
  jest.spyOn(FileInputButton.prototype, 'handleOnChange');
  const { wrapper } = setup();
  const handleOnChange = FileInputButton.prototype.handleOnChange;
  const input = wrapper.find('input');
  const testEvent = { target: { files: [] } };
  input.simulate('change', testEvent);
  expect(handleOnChange).toHaveBeenCalledWith(testEvent);
});

it('should invoke onFileUpload method when a file successfully uploaded', () => {
  const { wrapper, props } = setup();
  const input = wrapper.find('input');
  const testEvent = { target: { files: [] } };
  input.simulate('change', testEvent);
  expect(props.onFileUpload).not.toHaveBeenCalled();
  const files = ['testfile'];
  const testEvent2 = { target: { files } };
  const URL = {createObjectURL: jest.fn()}
  global = Object.assign(global, {URL})
  input.simulate('change', testEvent2);
  expect(props.onFileUpload).toHaveBeenCalledTimes(1);
  expect(URL.createObjectURL).toHaveBeenCalledWith(files[ 0 ]);
});
