import Clock from 'components/Timer/Clock';
import { mount } from 'enzyme';
import React from 'react';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Clock minLeft={25} secLeft={12} />);
});

afterEach(() => {
  wrapped.unmount();
});

it('render Clock', () => {
  expect(wrapped.find(Clock).length).toEqual(1);
  expect(wrapped.find('.clock__minutes').length).toEqual(1);
  expect(wrapped.find('.clock__seconds').length).toEqual(1);
  expect(wrapped.find('.clock__minutes').text()).toEqual(' 25 ');
  expect(wrapped.find('.clock__seconds').text()).toEqual(' 12 ');
});
