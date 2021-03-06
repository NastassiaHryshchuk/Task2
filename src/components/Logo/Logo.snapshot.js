import React from 'react';
import renderer from 'react-test-renderer';

import Logo from './Logo';

describe('Logo Snapshot', () => {
  test('renders', () => {
    const component = renderer.create(
      <Logo />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

