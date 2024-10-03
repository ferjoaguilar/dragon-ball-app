import {IResponse} from '@interfaces/character.interfaces'

export const getCharacters = async (page:number, limit:number) => {
    const response = await fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=${limit}`)
    if (!response.ok) {
        throw new Error('Api failed')
    }
    const data: IResponse = await response.json()
    return data.items
}