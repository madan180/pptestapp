import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import SignIn from '../index';

describe('<SignIn />', () => {
  let SignInComponent = '';
  beforeEach(() => {
    SignInComponent = shallow(<SignIn>Test</SignIn>);
  });

  test('should render correctly', () => {
    expect(SignInComponent).toMatchSnapshot();
  });
});
