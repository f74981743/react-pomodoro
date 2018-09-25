import App from 'components/App';
import ControlPanel from 'components/ControlPanel';
import Timer from 'components/Timer';
import { shallow } from 'enzyme';
import React from 'react';

let wrapped;

beforeEach(() => {
  // before every single test
  wrapped = shallow(<App />);
});

it('shows a control panel', () => {
  expect(wrapped.find(ControlPanel).length).toEqual(1);
});

it('shows a timer', () => {
  expect(wrapped.find(Timer).length).toEqual(1);
});
