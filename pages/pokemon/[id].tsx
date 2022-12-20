import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { MainLayout } from '../../components/layouts'
import { PokemonProps } from '../../interfaces';
import { PokemonInformation } from '../../components/pokemon';
import { getPokemonInfo } from '../../utils';

interface Props {
    pokemon: PokemonProps
}

// El objeto pokemon deberia tener solo la informacion con la que se desea trabajar
const PokemonPage: NextPage<Props> = ({ pokemon: {id, name, sprites} }) => {

    return (
        <MainLayout title={name}>
            <PokemonInformation id={id} name={name} sprites={sprites}/>
        </MainLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons = [...Array(151)].map((value, i) => `${i + 1}`)

    return {
        paths: [
            ...pokemons.map(id => ({
                params: { id }
            }))
        ],
        fallback: 'blocking'
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string }

    const pokemon = await getPokemonInfo(id)

    if(!pokemon){ // if it does not exist
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
        },
        revalidate: 86400 // 60 * 60 * 24
    }
}

export default PokemonPage