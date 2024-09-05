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
        
    })

    it('after loading, it shows Item 1', async () => {
        
    })
});
