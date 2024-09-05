import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import {renderWithWrapper} from '../test-utils'
import Todo from './Todos'

describe('<Todo />', () => {
    it('should have a add todo button', () => {
        renderWithWrapper(<Todo />);
        expect(screen.getByText(/add todo/i)).toBeInTheDocument();
    })

    it('shows loadings on initial rendering while fetching todo list', () => {
        renderWithWrapper(<Todo />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
        expect(screen.queryByText(/FIRST/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/to do one/i)).not.toBeInTheDocument();
    })

    it('after loading, it shows the first todo item', async () => {
        renderWithWrapper(<Todo />);

        expect(screen.getByText(/loading/i)).toBeInTheDocument();
        await waitForElementToBeRemoved(() => screen.getByText(/loading/i))
        expect(screen.getByText(/FIRST/i)).toBeInTheDocument();
        expect(screen.queryByText(/to do one/i)).toBeInTheDocument();
    })
});
