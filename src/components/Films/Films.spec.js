import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Films from './Films';
import Film from './Film/Film';

configure({ adapter: new Adapter() });

describe('<Films />', () => {
  it('should render one <Film /> items', () => {
    const wrapper = shallow(<Films />);
    expect(wrapper.find(Film).toHaveLength(1));
  });
});
