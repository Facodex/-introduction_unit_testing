-Este proyecto esta conformado por un archivo de componente y un archivo de test con su mismo nombre.
-Los componentes no actuan entre si porque cada componente es de un tutorial diferente o creado 
para una practica diferente.

#Metodos:
beforeEach() => nos permite ejecutar una accion que contenga todos los metodos que queramos pero antes de lanzar todos los tests, esto nos
ayudaria a no repetir un mismo codigo en cada test por ejemplo
fireEvent => podemos lanzar acciones como si fuese el usuario el que las hace
render() => renderiza un componente como para poder testear sobre el
screen => proporciona métodos para consultar los elementos representados del DOM para hacer afirmaciones sobre su contenido de texto, atributos y más.
.not => esto sirve para comprobar al reves de los metodos de test ej: expect(checkbox).not.toBeChecked(); y se puede usar con todos los metodos de comprobaciones
.textContent => es el texto del elemento del dom al que te refieres

#Que clase de metodos y comprobaciones contiene cada archivo de test?

ProfileCard.test: toBe(), typeof, toBeTruthy(), toBeFalsy(), toBeNull()

ProductPage.test: render(), expect(screen.queryByText(/TEXTOPRUEBA/i)).toBeInTheDocument()

TextBox.test: render() screen(), getByRole(), toBeInTheDocument(), toHaveStyle({backgroundColor: 'red'}), fireEvent

AcceptCookies.test : render() screen(), getByRole(), toBeInTheDocument(), fireEvent, getByLabelText(), .textContent