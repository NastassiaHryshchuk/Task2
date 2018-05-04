import React from 'react';

import ErrorBoundary from './ErrorBoundary';

describe('<ErrorBoundary />', () => {
  it('should generate an error message when an error is caught', () => {
    const wrapper = shallow(<ErrorBoundary />);
    wrapper.setState({
      hasError: true,
    });
    expect(wrapper.text()).to.equal('Something went wrong.');
  });
});
