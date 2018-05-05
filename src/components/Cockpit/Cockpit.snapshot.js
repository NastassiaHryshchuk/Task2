import React from 'react';
import renderer from 'react-test-renderer';

import Cockpit from './Cockpit';

describe('Cockpit Snapshot', () => {
  test('renders', () => {
    const component = renderer.create(
      <Cockpit />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});