import Target from 'components/Timer/Target';
import { mount } from 'enzyme';
import React from 'react';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Target />);
});

afterEach(() => {
  wrapped.unmount();
});

it('render Target', () => {
  expect(wrapped.find(Target).length).toEqual(1);
});
