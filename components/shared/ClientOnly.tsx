import React, { FC, PropsWithChildren } from 'react'
import { useIsMounted } from '../../hooks'

export const ClientOnly: FC<PropsWithChildren> = ({ children, ...delegated }) => {

    const { isMounted } = useIsMounted()

    if(!isMounted) return null

    return (
        <React.Fragment {...delegated}>
            {children}
        </React.Fragment>
    )
}
