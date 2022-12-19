import confetti from 'canvas-confetti'
import { useState } from 'react'
import { localFavorities } from '../utils'

export const useIsFavorite = (id: number) => {

    const [isFavorite, setIsFavorite] = useState<boolean>(localFavorities.isFavorite(id))

    const onToggleFavoritie = (): void => {
        localFavorities.toggleFavoritie(id)
        setIsFavorite(!isFavorite)

        if(isFavorite) return

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0
            }
        })
    }


    return {
        isFavorite,
        onToggleFavoritie
    }
}
