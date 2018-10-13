import Heatmap from 'components/Timer/Heatmap';
import { mount } from 'enzyme';
import React from 'react';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Heatmap />);
});

afterEach(() => {
  wrapped.unmount();
});

it('render Heatmap', () => {
  expect(wrapped.find(Heatmap).length).toEqual(1);
  expect(wrapped.find('.heatmap__item').length).toEqual(30);
});
