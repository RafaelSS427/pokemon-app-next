import { pokeApi } from '../api'
import { Pokemon } from '../interfaces'

export const getPokemonInfo = async( nameOrId: string ) => {

    const { data: pokemon } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`)

    return {
        id: pokemon.id,
        name: pokemon.name,
        sprites: pokemon.sprites
    }
}
