import { render} from '@testing-library/react';
import Text from '.';
import "@testing-library/jest-dom/extend-expect"


describe ('unit test for Text Component', () => {

    test('component should be return text', () => {
       const document= render(<Text>{'testing text'}</Text>);
       expect(document).toMatchSnapshot();  
    })

    test('component should have classname', () => {
        const { getByText } = render(<Text className="class-testing">{'testing text'}</Text>);
        const textElement = getByText('testing text');
        expect(textElement).toHaveClass('class-testing');
    });

   
})

