import { render } from '@testing-library/react';
import App from '../app/app';

test('App renders without crashing', () => {
  render(<App />);
});
