import AboutUs from '@/components/about-us/about-us'
import HomePage from '@/components/homepage/home-page'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <HomePage />
      <Box as={'main'} p={'100px'}>
        <AboutUs />
      </Box>
    </>
  )
}
