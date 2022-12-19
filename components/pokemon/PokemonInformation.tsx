import { FC } from 'react'
import { Grid, Card, Button, Container, Text, Image } from '@nextui-org/react'
import { useIsFavorite, useIsMounted } from '../../hooks'
import { PokemonProps } from '../../interfaces'
import { LoadingApp } from '../shared'

export const PokemonInformation: FC<PokemonProps> = ({ id, name, sprites }) => {
    const { isMounted } = useIsMounted()
    const { isFavorite, onToggleFavoritie } = useIsFavorite(id)
    
    if(!isMounted) return <LoadingApp />
    
    return (
        <Grid.Container css={{ marginTop: '5px' }} gap={2}>
            <Grid xs={12} sm={4}>
                <Card isPressable css={{ p: '30px' }}>
                    <Card.Body>

                        <Card.Image
                            src={sprites.other?.dream_world.front_default || '/no-image.png'}
                            alt={name}
                            width="100%"
                            height={200} //px
                        />

                    </Card.Body>
                </Card>
            </Grid>

            <Grid xs={12} sm={8}>
                <Card>
                    <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Text h1 transform='capitalize'>{name}</Text>

                        {/* <NoSsr> */}
                        <Button
                            color="gradient"
                            ghost={!isFavorite}
                            onPress={onToggleFavoritie}
                        >
                            {/* <NoSsr> */}
                            {isFavorite ? 'En favoritos' : 'Guardar en favoritos'}
                            {/* </NoSsr> */}
                        </Button>
                        {/* </NoSsr> */}

                    </Card.Header>


                    <Card.Body>
                        <Text size={30}>Sprites</Text>

                        <Container direction="row" display="flex" gap={2}>
                            <Image
                                src={sprites.front_default}
                                alt={name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={sprites.back_default}
                                alt={name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={sprites.front_shiny}
                                alt={name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={sprites.back_shiny}
                                alt={name}
                                width={100}
                                height={100}
                            />
                        </Container>
                    </Card.Body>

                </Card>

            </Grid>

        </Grid.Container>
    )
}
