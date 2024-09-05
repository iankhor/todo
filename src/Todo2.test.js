import { screen, waitForElementToBeRemoved, cleanup, } from '@testing-library/react';
import user from '@testing-library/user-event';
import {renderWithWrapper} from '../test-utils'
import Todo from './Todos'

describe('<Todo />', () => {
    afterEach(cleanup)

    it('after loading, shows Item 2 after clicking on the To do button', async () => {
        renderWithWrapper(<Todo />);

    })
});
