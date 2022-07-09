import { Box, Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Header } from '../components/Header'
import { Banner } from '../components/Home/Banner'
import { Slide } from '../components/Home/Slide'
import { Travel } from '../components/Home/Travel'

const Home: NextPage = () => {
  const [continents, setContinents] = useState([]);
  
  return (
    <>
      <Header />

      <Banner />

      <Travel />

      <Box w='90px' border='1px' m='auto' my='50px'/>

      <Flex align='center' flexDir='column' my='52px' justify='center'>
        <Text fontSize={{base:'24px', sm:'36px'}} fontWeight='500'>
          Vamos nessa?
        </Text>
        
        <Text align='center' fontSize={{base:'24px', sm:'36px'}} fontWeight='500'>
          Então escolha seu continente
        </Text>      
      </Flex>

      <Slide />
    </>
  )
}

export default Home
