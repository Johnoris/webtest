import { render } from '@testing-library/react';
import Profile from 'pages/main/profile';

test('App renders without crashing', () => {
  render(<Profile />);
});