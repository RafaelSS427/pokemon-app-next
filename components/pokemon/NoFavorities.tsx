import { Container, Text, Image } from '@nextui-org/react'
import { FC } from 'react'

export const NoFavorities: FC = () => {
  return (
    <Container css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)'
      }}>
        <Text h1>No favorities</Text>

        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
          alt="Icon image"
          width={250}
          height={250}
          css={{
            opacity: 0.1
          }}
        />
      </Container>
  )
}
