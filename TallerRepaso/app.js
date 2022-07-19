// Crear las siguientes funciones:
// 1. Cree una función que liste todos los nombres con sus respectiva edad.
// 2. Liste solamente los nombres que tengan una edad mayor a 20.
// 3. ¿Cuál es el porcentaje de mujeres que hay en el grupo?
// 4. Agregue una foto a cada personaje, y muestrelos en el navegador
// 5. Cree un nuevo personaje desde el navegador incluyendo imagen.

import { people } from "./people.js";

const select_character = document.getElementById("select-character")
const select_age = document.getElementById("select-Age")

select_character.addEventListener("change", toList)
select_age.addEventListener("change", toListNames)

function toList (){
    select_character.innerHTML = ' ' 
    const anyOption = document.createElement('option')
    select_character.appendChild(anyOption)
    anyOption.textContent = 'Select a character'

    people.map( character => {
        const option = document.createElement('option')
        option.textContent = character.name + " " + character.age + " years"
        option.value = character.name
        select_character.appendChild(option)
    })
}

function toListNames(){
    select_age.innerHTML = ' '
    const anyOption = document.createElement('option')
    select_age.appendChild(anyOption)
    anyOption.textContent = 'Select a character'

    people.map( character => {
        if(character.age > 20){
        const option = document.createElement('option')
        option.textContent = character.name 
        option.value = character.name
        select_age.appendChild(option)
        }
        
    })

}


toList()
toListNames()