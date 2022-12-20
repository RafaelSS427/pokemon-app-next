import { FC } from "react"
import { Card, Grid, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import { SmallPokemon } from "../../interfaces"

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon: { id, name, img } }) => {

    const router = useRouter()

    const onClick = () => {
        router.push(`/name/${name}`)
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1} onClick={ onClick }>
            <Card isHoverable isPressable>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image
                        src={img}
                        width="100%"
                        height={140} // px
                    />
                </Card.Body>

                <Card.Footer>
                    <Row wrap="wrap" justify="space-between" align="center">
                        <Text transform="capitalize">{name}</Text>
                        <Text b>{id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
