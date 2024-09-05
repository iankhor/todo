import { screen, waitForElementToBeRemoved, cleanup, } from '@testing-library/react';
import user from '@testing-library/user-event';
import {renderWithWrapper} from '../test-utils'
import Todo from './Todos'

describe('<Todo />', () => {
    afterEach(cleanup)

    it('should have a add todo button', () => {
        renderWithWrapper(<Todo />);
        expect(screen.getByText(/add todo/i)).toBeInTheDocument();
    })

    it('shows loadings on initial rendering while fetching todo list', () => {
        renderWithWrapper(<Todo />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
        expect(screen.queryByText(/Item 1/i)).not.toBeInTheDocument();
    })

    it('after loading, it shows Item 1', async () => {
        renderWithWrapper(<Todo />);

        expect(screen.getByText(/loading/i)).toBeInTheDocument();
        expect(screen.queryByText(/Item 1/i)).not.toBeInTheDocument();
        await waitForElementToBeRemoved(() => screen.getByText(/loading/i))
        expect(screen.queryByText(/Item 1/i)).toBeInTheDocument();
    })
});
