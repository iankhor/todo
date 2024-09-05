import { screen } from '@testing-library/react';
import {renderWithWrapper} from '../test-utils'
import Todo from './Todos'

test('renders learn react link', () => {
    renderWithWrapper(<Todo />);
    expect(screen.getByText(/add todo/i)).toBeInTheDocument();
});
