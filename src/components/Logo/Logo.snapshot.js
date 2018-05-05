import React from 'react';
import renderer from 'react-test-renderer';

import Logo from './Logo';

describe('Logo Snapshot', () => {
  test('renders', () => {
    const component = renderer.create(
      <Logo />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

