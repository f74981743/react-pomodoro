import Timer from 'components/Timer';
import { mount } from 'enzyme';
import React from 'react';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Timer />);
});

afterEach(() => {
  wrapped.unmount();
});

it('render Timer', () => {
  expect(wrapped.find(Timer).length).toEqual(1);
});
