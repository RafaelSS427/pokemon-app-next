import { Container, Loading } from '@nextui-org/react'

export const LoadingApp = () => {
  return (
    <Container css={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100vh'
    }}>
      <Loading size="xl" />
    </Container>
  )
}
