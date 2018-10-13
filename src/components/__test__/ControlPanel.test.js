import ControlPanel from 'components/ControlPanel';
import { mount } from 'enzyme';
import React from 'react';

let wrapped;

beforeEach(() => {
  wrapped = mount(<ControlPanel />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('Test Control Panel render', () => {
  it('render ControlPanel', () => {
    expect(wrapped.find(ControlPanel).length).toEqual(1);
  });

  it('have two buttons', () => {
    expect(wrapped.find('.control-panel__start-btn').length).toEqual(1);
    expect(wrapped.find('.control-panel__pause-btn').length).toEqual(1);
  });
});
