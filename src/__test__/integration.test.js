import App from 'components/App';
import { mount } from 'enzyme';
import React from 'react';

let wrapped;

beforeEach(() => {
  // before every single test
  wrapped = mount(<App />);
});

describe('Integration test', () => {
  it('click start button', () => {
    jest.useFakeTimers();
    wrapped.find('.control-panel__start-btn').simulate('click');
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);

    // The initial remaining time is 25 minutes,
    // run 5 minutes and expect that remaining time is 20 minutes
    jest.runTimersToTime(60 * 1000 * 5);
    expect(wrapped.state().remainingTime).toEqual(1200);

    jest.runTimersToTime(60 * 1000 * 25);
    expect(wrapped.state().target).toEqual(1);
  });
});
