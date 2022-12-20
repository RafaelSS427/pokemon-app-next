import { CSSProperties } from "react"
import NextLink from 'next/link'
import Image from "next/image"
import { Spacer, Text, useTheme, Link } from '@nextui-org/react'
import { ClientOnly } from "../shared"
//import dynamic from "next/dynamic"

// dynamic import -> not working when compiled react in production
//const Link = dynamic(() => import('@nextui-org/react').then(mod => mod.Link), { ssr: false })

export const Navbar = () => {
  const { theme } = useTheme()

  const styles: CSSProperties = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    padding: '0px 20px',
    width: '100%',
    backgroundColor: theme?.colors.gray200.value
  }

  return (
    <nav style={styles}>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="Icon image"
        width={70}
        height={70}
      />

      <ClientOnly>
        <NextLink href="/" passHref legacyBehavior>
          <Link>
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okémon!</Text>
          </Link>
        </NextLink>
      </ClientOnly>

      <Spacer css={{ flex: 1 }} />

      <ClientOnly>
        <NextLink href="/favorities" passHref legacyBehavior>
          <Link>
            <Text color="white">Favoritos</Text>
          </Link>
        </NextLink>
      </ClientOnly>

    </nav>
  )
}
