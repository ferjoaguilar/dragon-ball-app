import { useEffect, useState } from "react"
import styles from './Characters.module.css'

export interface IResponse {
    items: Item[];
    meta:  Meta;
    links: Links;
}

export interface Item {
    id:          number;
    name:        string;
    ki:          string;
    maxKi:       string;
    race:        string;
    gender:      Gender;
    description: string;
    image:       string;
    affiliation: Affiliation;
    deletedAt:   null;
}

export enum Affiliation {
    ArmyOfFrieza = "Army of Frieza",
    Freelancer = "Freelancer",
    ZFighter = "Z Fighter",
}

export enum Gender {
    Female = "Female",
    Male = "Male",
}

export interface Links {
    first:    string;
    previous: string;
    next:     string;
    last:     string;
}

export interface Meta {
    totalItems:   number;
    itemCount:    number;
    itemsPerPage: number;
    totalPages:   number;
    currentPage:  number;
}


export const Characters = () => {

    const [characters, setCharacters] = useState<Item[]>([])

    useEffect(() => {

       const getCharacters = async () =>{
        const response = await fetch('https://dragonball-api.com/api/characters')
        const data:IResponse = await response.json()
        setCharacters(data.items)
       }

       getCharacters()

    }, [])

  return (
    <div>
        <h1>Dragon ball characters</h1>
        <div className={styles.container}>
            {characters.map((character) => (
                <div key={character.id} className={styles.card}>
                    <img src={character.image} alt={character.name} />
                    <h3>{character.name}</h3>
                    <p>{character.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
