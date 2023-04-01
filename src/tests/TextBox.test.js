import { TextBox } from "../components/TextBox";
import { render, screen, fireEvent} from "@testing-library/react";


describe('TextBox component', () => {

    let article; //creo article aqui para despues ocuparlo en todo el archivo
    let button; //creo button aqui para despues ocuparlo en todo el archivo

    beforeEach( () => {
        render(<TextBox/>);
        // del jsx quiero recuperar un article con el name:parrafo inicial, que en el jsx será el title:'parrafo inicial'
        // getByRol nos ayuda a recuperar ese elemento del jsx
        article = screen.getByRole('article', {name: 'parrafo principal'});

        // aqui el name del button tendra que ser igual que el children del <button>TODO ESTO ES EL CHILDREN</button>
        button = screen.getByRole('button', {name: 'presiona para cambiar'});
    });

    test('El article y su texto se deben encontrar en el documento del comp. TextBox', () => {
        // probamos si el article que sacamos esta en el documento 
        expect(article).toBeInTheDocument();
    });

    test('El article dentro del componente TextBox debe contener cierto estilo', () => {    
        // probamos si el article que sacamos contiene el estilo que testeamos
        expect(article).toHaveStyle({backgroundColor: 'red'});
    });

    test('El button dentro del componente TextBox debe cambiar el estilo del article', () => {    
        // probamos si el article que sacamos contiene el estilo que testeamos
        fireEvent.click(button);
        expect(article).toHaveStyle({backgroundColor: 'blue'});
    });

});