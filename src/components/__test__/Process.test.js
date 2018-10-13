import Process from 'components/Timer/Process';
import { mount } from 'enzyme';
import React from 'react';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Process />);
});

afterEach(() => {
  wrapped.unmount();
});

it('render Process', () => {
  expect(wrapped.find(Process).length).toEqual(1);
});
