'use client'
import { Flex, HStack, Link, Text } from '@chakra-ui/react'
import NavBarDrawer from './nav-bar-drawer'
import { useEffect, useState } from 'react'
import { socialItems } from '@/data/placeholder-data'
import { getIcon } from './nav-bar-items'

const NavBar = () => {
  const [scrolledPastHero, setScrolledPastHero] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolledPastHero(window.scrollY > 200)
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  return (
    <HStack
      as='nav'
      w='100%'
      display='flex'
      justifyContent='space-between'
      p='30px'
      position='fixed'
      top={0}
      zIndex={1000}
      transition='transform 0.3s ease, background-color 0.4s ease'
      bg={scrolledPastHero ? 'white' : 'transparent'}
    >
      {/* Botón menú / Drawer */}
      <NavBarDrawer scrolledPastHero={scrolledPastHero} />

      {/* Título */}
      <Text
        as='span'
        fontFamily='var(--font-inria-serif)'
        color={scrolledPastHero ? 'black' : 'white'}
        fontSize='30px'
        fontWeight={400}
        hideBelow='md'
      >
        LOGO
      </Text>

      <Flex gap={'20px'} alignItems={'center'}>
        {socialItems.map((item, idx) => (
          <Link key={idx} href={item.href} target='_blank' outline={'none'}>
            {getIcon(item.icon, scrolledPastHero ? 'black' : 'white')}
          </Link>
        ))}
      </Flex>
    </HStack>
  )
}

export default NavBar
