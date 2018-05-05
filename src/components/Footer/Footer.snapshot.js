import React from 'react';
import Footer from './Footer';
import renderer from 'react-test-renderer';

describe('Footer Snapshot', () => {
  test('renders', () => {
    const component = renderer.create(
      <Footer />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

