import { titleCase, mayorDeEdad } from "../components/ProfileCard";

// este describe nos permitira ordenar pequeños grupos de prueba
describe('funciones dentro del componente ProfileCard', () => {

    // aqui probaremos la funcion titleCase 
    describe('titleCase', () => {

        // primer prueba
        test('debe retornar un string', () =>{
            const result = titleCase('Palomino ramirez'); //llamamos a la funciona testear
            expect(typeof result).toBe('string'); // seria: ejecuta la funcion y espero que sea STRING
        }); 

        // segunda prueba
        test('debe retornar el string transformado', () =>{
            expect(titleCase('nuevo valor')).toBe('Nuevo Valor');
        }); 

        // tercera prueba
        test('debe rdevolver un string vacio si recibe un string vacio', () =>{
            expect(titleCase('')).toBe('');
        }); 
    });


    // aqui probamos otra funcion del mimso componente, asi se organiza
    describe('mayorDeEdad', () => {

        test('debe devolver un boolean', ()=>{
            expect(typeof mayorDeEdad(19)).toBe('boolean')
        });

        test('si es mayor de edad devuelve true', ()=>{
            expect(mayorDeEdad(25)).toBeTruthy();
        });

        test('si la edad es 18 devuelve true', ()=>{
            expect(mayorDeEdad(18)).toBeTruthy();
        });

        test('si es menor de edad devuelve false', ()=>{
            expect(mayorDeEdad(10)).toBeFalsy();
        });

        test('si la edad es negativa devuelve null', ()=>{
            expect(mayorDeEdad(-6)).toBeNull();
        });

    });

});