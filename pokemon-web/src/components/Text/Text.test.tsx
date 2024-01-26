import { render } from '@testing-library/react';
import Text from '.';

describe ('unit test for text Component', () => {

    test('component should be return text', () => {
        render(<Text>{'testing text'}</Text>);
        console.log('abcde')
    })

})

