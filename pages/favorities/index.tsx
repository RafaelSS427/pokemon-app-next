import { useEffect, useState } from 'react'

import { MainLayout } from '../../components/layouts'
import { FavoritePokemons, NoFavorities } from '../../components/pokemon'
import { localFavorities } from '../../utils'

const FavoritiesPage = () => {

  const [favoritiePokemons, setFavoritiePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritiePokemons(localFavorities.pokemons)
  }, [])

  return (
    <MainLayout>

      {
        favoritiePokemons.length === 0
          ? (<NoFavorities />)
          : ( <FavoritePokemons favoritiePokemons={ favoritiePokemons } /> )
      }
    </MainLayout>
  )
}

export default FavoritiesPage