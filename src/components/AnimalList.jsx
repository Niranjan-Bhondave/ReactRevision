import AnimalCard from './AnimalCard'

function AnimalList({animalListArr,handleAdopt}){
    return animalListArr.filter(animal => animal.adopted === false).length ? (
    <div>
        <p>Available animals:{animalListArr.filter(animal => animal.adopted === false).length}</p>
    <ul>
    {animalListArr.filter(animal => animal.adopted === false).map(animal => { 
         return <li key={animal.id}><AnimalCard name = {animal.name} species = {animal.species} age = {animal.age} adopted = {animal.adopted} image = {animal.image} handleAdopt = {handleAdopt}/></li>
    })
    }
    </ul>
    </div>
    ) : <p>No Animals available</p>
}
export default AnimalList;