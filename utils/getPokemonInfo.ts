import { pokeApi } from '../api'
import { Pokemon, PokemonProps } from '../interfaces'

export const getPokemonInfo = async (nameOrId: string):Promise<PokemonProps | null> => {
    try {
        const { data: pokemon } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`)

        return {
            id: pokemon.id,
            name: pokemon.name,
            sprites: pokemon.sprites
        }
    } catch (error) {
        return null
    }
}
