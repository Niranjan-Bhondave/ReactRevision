function AnimalCard({image = "https://placehold.co/200",name,species,age,adopted,handleAdopt}){
    return(
        <div>
            <img src={image} alt={species + "Image"} />
            {age < 2 && <p>Young Animal</p>}
            <p>{name}</p>
            <p>{species}</p>
            {species === "Dog" && <p>Good with kids</p>}
            {species === "Cat" && <p>Loves naps</p>}
            {species === "Rabbit" && <p>Loves carrots</p>}
            <p>{age}</p>
            {adopted ? <p>Not available</p> : <button onClick={()=>handleAdopt(name)}>Adopt</button>}
        </div>
    )
}

export default AnimalCard;