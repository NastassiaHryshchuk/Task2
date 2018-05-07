import React, { Component } from 'react';

import ErrorBoundary from './ErrorBoundary';

class ProblemChild  extends Component {
  render() {
    throw new Error('I crashed!');
  }
}

describe('<ErrorBoundary />', () => {
  it('should catch errors with componentDidCatch', () => {
    const spy = sinon.spy(ErrorBoundary.prototype, 'componentDidCatch');
    const wrapper = mount(<ErrorBoundary><ProblemChild /></ErrorBoundary>);
    expect(ErrorBoundary.prototype.componentDidCatch).to.have.been.called();
  });
});
