import { shallow } from 'enzyme';
import React from 'react';

import LoadingPage from '../../components/LoadingPage';

test('should render LoadingPage correctly', () => {
  const wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
});
