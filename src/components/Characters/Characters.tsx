import { useEffect, useState } from "react"
import styles from './Characters.module.css'
import { Loading } from "../Loading/Loading";
import { ErrorApi } from "../ErrorApi/ErrorApi";
import { FcLike } from "react-icons/fc";
import { Item } from "@interfaces/character.interfaces";
import { getCharacters } from "../../services/character.services";


export const Characters = () => {

    const [characters, setCharacters] = useState<Item[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {

        (async () => {
            try {
                const data = await getCharacters()
                setCharacters(data)
            } catch (error) {
                if (error instanceof Error){
                    setError(error.message)
                }
            } finally{
                setLoading(false)
            }
        })
        ()
            
    }, [])

    if (loading) {
        return <Loading />
    }

    if (error){
        return <ErrorApi/>
    }

    return (
        <div>
            <h1>Dragon ball characters</h1>
           
            <div className={styles.container}>
                {characters.map((character) => (
                    <div key={character.id} className={styles.card}>
                        <img src={character.image} alt={character.name} />
                        <h3>{character.name}</h3>
                        <p>{character.description}</p>

                        <div className={styles.footer}>
                            <FcLike />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
