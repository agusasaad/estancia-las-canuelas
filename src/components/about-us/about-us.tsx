import { Box, Flex, Image, Text } from '@chakra-ui/react'
import image_estancia from '@/assets/lHmi159kr7I9oBaAtJKirA5TM.avif'

const AboutUs = () => {
  return (
    <Box
      as={'section'}
      minH={'80vh'}
      display={'flex'}
      alignItems={'flex-start'}
      justifyContent={'space-between'}
      columnGap={'100px'}
    >
      <Flex
        flexDir={'column'}
        gap={'20px'}
        maxW={'50%'}
        alignItems={'flex-start'}
      >
        <Text
          as='span'
          fontFamily={'var(--font-inria-serif)'}
          fontSize={'50px'}
          color='blackAlpha.800'
          fontWeight={500}
          textWrap={'balance'}
        >
          Un lugar donde el tiempo se detiene
        </Text>
        <Text color={'blackAlpha.900'} fontSize={'18px'} lineHeight={'32px'}>
          Somos una estancia dedicada al polo desde 1998, reconocida por recibir
          huéspedes de todo el mundo. Con años de experiencia en turismo y
          hospitalidad, hoy ofrecemos un servicio profesional para quienes
          buscan descansar o realizar eventos en un entorno auténtico y cercano
          a Buenos Aires.
        </Text>
      </Flex>

      <Image
        src={image_estancia.src}
        alt='estancia'
        w={'600px'}
        boxShadow={'0 4px 12px rgba(0, 0, 0, 0.08)'}
      />
    </Box>
  )
}

export default AboutUs
