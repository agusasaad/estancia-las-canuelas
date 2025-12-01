import { Box, Button, Text } from '@chakra-ui/react'
import { LuCalendarCheck } from 'react-icons/lu'
import DecorativeDivider from '../reusable/decorative-divider'

const HomePage = () => {
  return (
    <Box
      as={'section'}
      w={'100%'}
      minH={'85vh'}
      position={'relative'}
      overflow={'hidden'}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src='/video_2.mp4' type='video/mp4' />
      </video>

      {/* Contenido encima del video */}
      <Box
        bg={'rgba(46, 46, 46, 0.53)'}
        position='absolute'
        w={'100%'}
        h={'100%'}
        zIndex={1}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        flexDir={'column'}
        textAlign={'center'}
      >
        <DecorativeDivider />

        <Text
          as='span'
          fontFamily={'var(--font-inria-serif)'}
          fontSize={'72px'}
          color='white'
          mt={4}
          maxW={'1000px'}
          textTransform={'uppercase'}
        >
          Estancia Las Cañuelas
        </Text>

        <Text
          as='span'
          fontFamily={'var(--font-inria-serif)'}
          fontSize={'28px'}
          color='white'
          mt={4}
        >
          Hotel, Eventos & Polo Club
        </Text>

        {/* Botón de Reservaciones */}
        <Button
          fontFamily='var(--font-plus-jakarta)'
          fontSize='16px'
          mt={'40px'}
          fontWeight={600}
          bg='#B28966'
          color='white'
          borderRadius='0px'
          minH='50px'
          textTransform='uppercase'
          letterSpacing={'0.5px'}
        >
          <LuCalendarCheck />
          Reservar ahora
        </Button>
      </Box>
    </Box>
  )
}

export default HomePage
