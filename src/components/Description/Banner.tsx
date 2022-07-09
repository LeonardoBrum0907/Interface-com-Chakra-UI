import { Box, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return(
    <Box h={{base:'300px', sm:'400px', md:'500px'}} position='relative'>
      <Image 
        position='absolute'
        zIndex='dropdown'
        w='100%'
        h='100%'
        src='/continents/Europe/Europe2.jpg'
        objectFit='cover'
        filter='auto' 
        brightness='75%'>
      </Image>
      <Box position='absolute' bottom='59px' left='10%' zIndex='overlay'>
        <Text fontSize={{base:'36px', md:'48px'}} fontWeight='600' textAlign='center' color='white'>Europa</Text>
      </Box>
    </Box>
  )
}