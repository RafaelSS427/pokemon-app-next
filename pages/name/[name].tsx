import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { pokeApi } from '../../api';
import { MainLayout } from '../../components/layouts'
import { PokemonInformation } from '../../components/pokemon';
import { PokemonListResponse, PokemonProps } from '../../interfaces';
import { getPokemonInfo } from '../../utils';

interface Props {
  pokemon: PokemonProps
}

const PokemonyNamePage: NextPage<Props> = ({ pokemon: {id, name, sprites} }) => {
  return (
    <MainLayout title={name}>
      <PokemonInformation id={id} name={name} sprites={sprites} />
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const getNamePokemons: string[] = data.results.map(pokemon => pokemon.name)

  return {
    paths: getNamePokemons.map(name => ({
      params: { name }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { name } = params as { name: string }

  const pokemon = await getPokemonInfo(name)

  if(!pokemon){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      pokemon
    }
  }
}

export default PokemonyNamePage