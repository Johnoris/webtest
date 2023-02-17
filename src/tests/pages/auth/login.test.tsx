import { render } from '@testing-library/react';
import Login from 'pages/auth/login';

test('App renders without crashing', () => {
  render(<Login />);
});