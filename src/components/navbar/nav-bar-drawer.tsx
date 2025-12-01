'use client'
import { Box, CloseButton, Drawer, Portal, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { TfiClose } from 'react-icons/tfi'
import NavBarItems from './nav-bar-items'

const NavBarDrawer = ({ scrolledPastHero }: { scrolledPastHero: boolean }) => {
  const [open, setOpen] = useState(false)

  return (
    <Drawer.Root
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      size='full'
      placement='top'
    >
      <Drawer.Trigger asChild>
        <Box
          as='button'
          cursor='pointer'
          display='flex'
          alignItems='center'
          gap={2}
          outline='none'
          transition='color 0.4s ease'
          color={scrolledPastHero ? 'black' : 'white'}
        >
          <CiMenuFries
            color={scrolledPastHero ? 'black' : 'white'}
            size='30px'
            style={{
              transition: 'color 0.4s ease',
            }}
          />
          <Text
            as='span'
            fontSize='18px'
            fontWeight={400}
            color={scrolledPastHero ? 'black' : 'white'}
            transition='color 0.4s ease'
          >
            MENÚ
          </Text>
        </Box>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop backdropFilter='blur(10px)' />
        <Drawer.Positioner>
          <Drawer.Content bg='rgba(255, 255, 255, 0.95)'>
            <Drawer.Body p='50px'>
              <NavBarItems />
            </Drawer.Body>

            <Drawer.CloseTrigger asChild>
              <CloseButton
                size='2xl'
                _hover={{ bg: 'transparent' }}
                outline='none'
                color='black'
              >
                <TfiClose fontSize='50px' />
              </CloseButton>
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}

export default NavBarDrawer
