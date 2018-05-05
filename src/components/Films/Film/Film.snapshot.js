import React from 'react';
import renderer from 'react-test-renderer';

import Film from './Film';

describe('Film Snapshot', () => {
  test('renders', () => {
    const component = renderer.create(
      <Film />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});