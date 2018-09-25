import { mount } from 'enzyme';
import React from 'react';
import ControlPanel from '../ControlPanel';

let wrapped;

beforeEach(() => {
  wrapped = mount(<ControlPanel />);
});

afterEach(() => {
  wrapped.unmount();
});

it('it has two buttons', () => {
  expect(wrapped.find('a').length).toEqual(2);
});
