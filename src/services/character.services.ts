import {IResponse} from '@interfaces/character.interfaces'

export const getCharacters = async () => {
    const response = await fetch('https://dragonball-api.com/api/characters')
    if (!response.ok) {
        throw new Error('Api failed')
    }
    const data: IResponse = await response.json()
    return data.items
}