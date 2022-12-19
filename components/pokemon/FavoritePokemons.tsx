import { Grid } from '@nextui-org/react'
import { FC } from 'react'
import { FavoriteCardPokemon } from './FavoriteCardPokemon'

interface Props {
    favoritiePokemons: number[]
}

export const FavoritePokemons: FC<Props> = ({ favoritiePokemons }) => {
    return (
        <Grid.Container gap={2} direction="row" justify="flex-start">
            {
                favoritiePokemons.map(id => (
                    <FavoriteCardPokemon key={id} id={id} />
                ))
            }
        </Grid.Container>
    )
}
