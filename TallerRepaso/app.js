// Crear las siguientes funciones:
// 1. Cree una función que liste todos los nombres con sus respectiva edad.
// 2. Liste solamente los nombres que tengan una edad mayor a 20.
// 3. ¿Cuál es el porcentaje de mujeres que hay en el grupo?
// 4. Agregue una foto a cada personaje, y muestrelos en el navegador
// 5. Cree un nuevo personaje desde el navegador incluyendo imagen.

import { people } from "./people.js";

const select_character = document.getElementById("select-character")
const select_age = document.getElementById("select-Age")
const filter_gender = document.getElementById("filter-gender")
const Main = document.getElementById("container-characters")

const women = document.getElementById("women")
const men = document.getElementById("men")

window.addEventListener("load", toList)
select_character.addEventListener("change", render)
select_age.addEventListener("change", toListNames)
filter_gender.addEventListener("change" , quantityWomen)


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

function quantityWomen (event){

    const filterGender = event.target.value === 'percentage of women'
    ? people.filter(character => character.gender === "Feminine")
    : event.target.value === 'percentage of men'
    ? people.filter(character => character.gender === "Male")
    : null

    const percetage = event.target.value === 'percentage of women'
    ? women.textContent = "the percentage of women is: " + Math.round((3*100)/7) + "%"
    : event.target.value === 'percentage of men'
    ? men.textContent = "the percentage of men is: " + Math.round((4*100)/7) + "%"
    : null

    Main.innerHTML = ''
    filterGender.map(character => createCharacter(character))

}

function render(){

    people.map( character => {character.name ===  select_character.value ? createCharacter(character): null})
}

function createCharacter(character){

    const { name , age, gender} = character

    const card  = document.createElement('div')
    card.classList.add("card")

    const image = document.createElement('img')

    const nameCharacter = document.createElement("p")
    nameCharacter.textContent = name

    const ageCharacter = document.createElement("p")
    ageCharacter.textContent = age

    const genderCharacter = document.createElement("p")
    genderCharacter.textContent = gender 

    Main.appendChild(card)
    card.appendChild(nameCharacter)
    card.appendChild(ageCharacter)
    card.appendChild(genderCharacter)

}


    



toList()
toListNames()
