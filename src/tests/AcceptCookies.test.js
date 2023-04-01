import { render, screen, fireEvent, getByLabelText } from "@testing-library/react";
import { AcceptCookies } from "../components/AcceptCookies";

describe('AcceptCookies component', () => {

    let checkbox;
    let article;
    beforeEach(() => {
        render(<AcceptCookies/>);
        // usamos getByLabelText para traer ese checkbox de acuerdo al children del label que seria Acepta las cookies
        // y el checkbox lo traemos porque el htmlFor del label es el mismo que el id del input del checkbox
        checkbox = screen.getByLabelText('Acepta las cookies');
        article = screen.getByRole('article', {name: 'confirmacion cookies'});
    });

    test('si el checkbox esta en el componente y esta desactivado', () => {
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

    });

    test('si cambia el texto al pulsar el checkbox', () => {
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
        // comprobar si el texto del articulo ha cambiado 
        expect(article.textContent).toBe('Cookies aceptadas');
    });

});