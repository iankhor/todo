import { screen, waitForElementToBeRemoved, cleanup, } from '@testing-library/react';
import user from '@testing-library/user-event';
import {renderWithWrapper} from '../test-utils'
import Todo from './Todos'

describe.only('<Todo />', () => {
    afterEach(cleanup)

    // Exercise to write a test and fix implementation
    it('when hovering over the status, console is NOT called', async () => {
        renderWithWrapper(<Todo />);
        const consoleSpy = jest.spyOn(console, 'log');
    
        await waitForElementToBeRemoved(() => screen.getByText('Loading ...'));
        
        const statusElement = screen.getByText(/Success/i);
        user.hover(statusElement);
        
        expect(consoleSpy).not.toHaveBeenCalledWith('stealing');
    })
});
