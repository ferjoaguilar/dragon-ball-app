import { useState } from 'react';
import styles from './Characters.module.css'
import { Loading } from "../Loading/Loading";
import { ErrorApi } from "../ErrorApi/ErrorApi";
import { FcLike } from "react-icons/fc";

import { getCharacters } from "../../services/character.services";
import useSWR from "swr";


export const Characters = () => {

    const [page, setPage] = useState<number>(2)

    const fetcher = () => getCharacters(page, 15)
    const {data, error, isLoading} = useSWR(`api/characters?page=${page}`, fetcher)


    const handleNextPage = () => {
        setPage(page+1)
    }

    const handlePreviosPage = () => {
        setPage(page-1)
    }

    if (isLoading) {
        return <Loading />
    }

    if (error){
        return <ErrorApi/>
    }

    return (
        <div>
            <h1>Dragon ball characters</h1>
           
            <div className={styles.container}>
                {data?.map((character) => (
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
            {/* Pagination */}
            <div>
                <button onClick={handlePreviosPage}>Previous</button>
                <span>Page {page}</span>
                <button onClick={handleNextPage} >Next</button>
            </div>
        </div>
    )
}
