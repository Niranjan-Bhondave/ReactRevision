import { useState } from 'react'
import AnimalList from './components/AnimalList'

function App() {
  const animals = [
  {
    id: 1,
    name: "Buddy",
    species: "Dog",
    age: 3,
    adopted: false,
    image:
      "https://placehold.co/200x150?text=Dog"
  },
  {
    id: 2,
    name: "Luna",
    species: "Cat",
    age: 2,
    adopted: true,
    image:
      "https://placehold.co/200x150?text=Cat"
  },
  {
    id: 3,
    name: "Snow",
    species: "Rabbit",
    age: 1,
    adopted: false,
    image:
      "https://placehold.co/200x150?text=Rabbit"
  },
  {
    id: 4,
    name: "Max",
    species: "Dog",
    age: 5,
    adopted: true,
    image:
      "https://placehold.co/200x150?text=Dog"
  },
  {
    id: 5,
    name: "Kiwi",
    species: "Parrot",
    age: 4,
    adopted: false,
    image:
      "https://placehold.co/200x150?text=Parrot"
  }
];

function handleAdopt(name){
  alert(`${name} adopted !`)
}
  return (
    <>
      <AnimalList animalListArr = {animals} handleAdopt = {handleAdopt}/>
    </>
  )
}

export default App