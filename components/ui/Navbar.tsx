import NextLink from 'next/link'
import { CSSProperties } from "react"
import { Spacer, Text, useTheme, Link } from '@nextui-org/react'
import Image from "next/image"
import { NoSsr } from '../shared'
import { useIsMounted } from '../../hooks/useIsMounted'

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

      <NoSsr>
        <Link href="/">
          <Text color="white" h2>P</Text>
          <Text color="white" h3>okémon!</Text>
        </Link>
      </NoSsr>

      <Spacer css={{ flex: 1 }} />

      <NoSsr>
        <Link href="/favorities">
          <Text color="white">Favoritos</Text>
        </Link>
      </NoSsr>
      
    </nav>
  )
}
