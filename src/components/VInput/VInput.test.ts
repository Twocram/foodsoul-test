import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';
import VInput from './VInput.vue';

describe('InputComponent', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(VInput, {
      props: {
        type: 'text',
        placeholder: 'Enter text',
        name: 'test-input',
      },
    });
  });

  it('renders with correct props', () => {
    expect(wrapper.props().type).toBe('text');
    expect(wrapper.props().placeholder).toBe('Enter text');
    expect(wrapper.props().name).toBe('test-input');

    const inputElement = wrapper.find('input');
    expect(inputElement.element.placeholder).toBe('Enter text');
    expect(inputElement.element.name).toBe('test-input');
  });

  it('updates modelValue on input', async () => {
    const inputElement = wrapper.find('input');
    await inputElement.setValue('Hello, world!');

    expect(wrapper.vm.modelValue).toBe('Hello, world!');
    expect(inputElement.element.value).toBe('Hello, world!');
  });

  it('applies error class when error prop is passed', async () => {
    await wrapper.setProps({ error: 'This is an error message' });
    expect(wrapper.classes()).toContain('error');
  });

  it('applies disabled class when disabled prop is true', async () => {
    await wrapper.setProps({ disabled: true });
    expect(wrapper.classes()).toContain('disabled');
    expect(wrapper.find('input').element.disabled).toBe(true);
  });

  it('does not accept input when disabled', async () => {
    await wrapper.setProps({ disabled: true });
    const inputElement = wrapper.find('input');
    await inputElement.setValue('This should not work');

    expect(wrapper.vm.modelValue).not.toBe('This should not work');
  });
});
