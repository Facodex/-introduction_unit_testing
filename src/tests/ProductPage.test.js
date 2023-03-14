import React from 'react'
import { screen, render } from '@testing-library/react'
import { ProductPage } from '../components/ProductPage';
import '@testing-library/jest-dom';

// AQUI VAMOS A IMPLEMENTAR TEST SENCILLOS USANDO TDD 
// 1- CREAR UN TEST QUE FALLE (RED)
// 2- LO "MIMIMO NECESARIO" (GREEN)
// 3- REFACTORS, mejorar lo que ya existe (clean code, code smells, etc);

// Pruebas para el componente ProductPage
beforeEach(() => render(<ProductPage/>));

describe('ProductPageComponent', () => {

    it('must display a title', () => {
        // render(<ProductPage/>); 
        expect(screen.queryByText(/product page/i)).toBeInTheDocument();  
    });

    it('must display the product name PELOTA', () => {
        // render(<ProductPage/>); 
        expect(screen.queryByText(/pelota/i)).toBeInTheDocument();  
    });

});

// REFACTOR: ESTAMOS DUPLICANDO LA LINEA render(<ProductPage/>);
// PARA ESO USAREMOS LA LINEA beforeEach(() => render(<ProductPage/>));