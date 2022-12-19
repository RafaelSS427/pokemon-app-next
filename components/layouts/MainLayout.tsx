import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'

import { Navbar } from '../ui'

interface Props extends PropsWithChildren {
    title?: string
}

//const Navbar = dynamic(() => import('../ui/Navbar'), { ssr: false })

const origin = typeof window === 'undefined' ? '' : window.location.origin

export const MainLayout: FC<Props> = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="Rafael Sequeira" />
                <meta name="description" content={`Información sobre el pokemon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />

                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${ title }`}/>
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            {/* Navbar with next ui */}
            {/* <NoSsr>
                <NavbarAppNext />
            </NoSsr> */}

            {/* Navbar app */}
            <Navbar />

            <main style={{ padding: '0px 20px' }}>
                {children}
            </main>


            {/* Footer */}
        </>
    )
}
