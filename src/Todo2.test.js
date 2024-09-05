import { screen, waitForElementToBeRemoved, cleanup, } from '@testing-library/react';
import user from '@testing-library/user-event';
import {renderWithWrapper} from '../test-utils'
import Todo from './Todos'

describe('<Todo />', () => {
    afterEach(cleanup)

    it('after loading, shows Item 2 after clicking on the To do button', async () => {
        renderWithWrapper(<Todo />);

        expect(screen.getByText(/loading/i)).toBeInTheDocument();
        expect(screen.queryByText(/Item 1/i)).not.toBeInTheDocument();

        await waitForElementToBeRemoved(() => screen.getByText(/loading/i))

        expect(screen.queryByText(/Item 1/i)).toBeInTheDocument();
        expect(screen.queryByText(/Item 2/i)).not.toBeInTheDocument();
        
        const toDoButton = screen.getByRole('button', { name: /add todo/i})
        user.click(toDoButton)

        await waitForElementToBeRemoved(() => screen.getByText(/Item 1/i))
        expect(screen.queryByText(/Item 2/i)).toBeInTheDocument();
    })
});
