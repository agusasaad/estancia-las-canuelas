import { navItems, contactItems, socialItems } from '@/data/placeholder-data'
import { animation_line } from '@/styles/common-styles'
import { Box, Flex, Link } from '@chakra-ui/react'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { PiFacebookLogo, PiInstagramLogo } from 'react-icons/pi'
import { NavMotionItem } from '../reusable/nav-motion-item'

export const getIcon = (name: string, color: string) => {
  switch (name) {
    case 'instagram':
      return <PiInstagramLogo size={30} color={color} />
    case 'facebook':
      return <PiFacebookLogo size={30} color={color} />
    default:
      return null
  }
}
const NavBarItems = () => {
  return (
    <Box
      w={'100%'}
      h={'100%'}
      display={'flex'}
      flexDir={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'40px'}
    >
      {/* NAV LINKS */}
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={'30px'}
      >
        {navItems.map((item, idx) => (
          <NavMotionItem key={item.id} delay={idx * 0.1}>
            <Link
              {...animation_line}
              fontFamily={'var(--font-inria-serif)'}
              fontSize={{ base: '40px', md: '50px' }}
              fontWeight={400}
              outline={'none'}
              textDecor={'none'}
              lineHeight={'normal'}
              color={'black'}
              href={item.path}
              textAlign={'center'}
            >
              {item.label}
            </Link>
          </NavMotionItem>
        ))}
      </Box>

      {/* CONTACTO */}
      <Flex flexDir={'column'} alignItems={'center'} gap={'30px'}>
        {contactItems.map((item, idx) => (
          <NavMotionItem key={item.id} delay={0.4 + idx * 0.1}>
            <Link
              {...animation_line}
              fontSize={idx === 0 ? '18px' : '16px'}
              display={'flex'}
              alignItems={'center'}
              color={'black'}
              textDecor={'none'}
              href={item.href}
              outline={'none'}
            >
              {item.label}
              <MdOutlineArrowOutward size={18} />
            </Link>
          </NavMotionItem>
        ))}
      </Flex>

      {/* REDES SOCIALES */}
      <Flex gap={'20px'} alignItems={'center'}>
        {socialItems.map((item, idx) => (
          <NavMotionItem key={item.id} delay={0.6 + idx * 0.1}>
            <Link href={item.href} target='_blank' outline={'none'}>
              {getIcon(item.icon, 'black')}
            </Link>
          </NavMotionItem>
        ))}
      </Flex>
    </Box>
  )
}

export default NavBarItems
