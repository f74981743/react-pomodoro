import App from 'components/App';
import { mount } from 'enzyme';
import React from 'react';

let wrapped;

beforeEach(() => {
  // before every single test
  wrapped = mount(<App />);
});

it('show the timer', () => {
  jest.useFakeTimers();
  expect(wrapped.find('.control-panel__start-btn').length).toEqual(1);
  wrapped.find('.control-panel__start-btn').simulate('click');
  expect(setInterval).toHaveBeenCalledTimes(1);
  expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
