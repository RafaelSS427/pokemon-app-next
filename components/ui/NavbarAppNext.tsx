import { Navbar, Button, useTheme, Text } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

// navbar creado con la libreria de next-ui
export const NavbarAppNext = () => {

    const { isDark } = useTheme()

    return (
        <Navbar isBordered={isDark} variant="sticky">
            <Navbar.Brand>
                <AcmeLogo />
                <Text b color="inherit" hideIn="xs">
                    ACME
                </Text>
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
                <Navbar.Link href="#">Features</Navbar.Link>
                <Navbar.Link isActive href="#">
                    Customers
                </Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Company</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Link color="inherit" href="#">
                    Login
                </Navbar.Link>
                <Navbar.Item>
                    <Button auto flat as={Link} href="#">
                        Sign Up
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    )
}

const AcmeLogo = () => (
    <svg
      className=""
      fill="none"
      height="36"
      viewBox="0 0 32 32"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="var(--secondary)" height="100%" rx="16" width="100%" />
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );