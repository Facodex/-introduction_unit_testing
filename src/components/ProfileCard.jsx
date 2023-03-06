import React from 'react'

// Esta funcion ayudara al componente, su fin sera devolver 
// cada palabra con la primer letra en mayuscula
export function titleCase(text){

    // comprobamos si text es vacio, retorna vacio
    if(text === '') return ''; 
    
    // y si text no es vacio empieza la logica

    const arr = text.split(' '); // parto el string por espacios
    const result = []; // aqui meto las palabras separadas

    // recorro el primer array 
    for(let elem of arr){
        result.push(elem[0].toUpperCase() + elem.substring(1).toLowerCase())
    }

    return result.join(' '); //juntamos el array dandole un espacio por palabra y lo devolvemos como string
}


// Esta funcion determina si es mayor(true), menor(false), si es num negativo(null)
export function mayorDeEdad(age){

    
    if(age < 0) return null;

    // si age >= 18 true y si no false 
    return (age >= 18 ) ? true : false

}


// In this component we'll see the data user
export const ProfileCard = ({name, surname, age, description}) => {
  return (
    <div></div>
  )
}
