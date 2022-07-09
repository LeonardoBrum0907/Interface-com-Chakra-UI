import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Travel() {
  const isMobileVersion = useBreakpointValue({
    base: true,
    sm: false,
  })
  return(
    <Flex>
      {isMobileVersion ?
        <Flex flexDir='column' w='1160px' justify='space-between'>
          <Box display='flex' flexDirection='column' alignItems='center' >
            <Image src='/icons/cocktail.svg' boxSize='65px'/>
            <Text textAlign='center' fontSize='16px' mt='16px'>Vida Noturna</Text>
          </Box>
          <Box display='flex' flexDirection='column' alignItems='center' mt='24px'>
            <Image src='/icons/surf.svg' boxSize='65px'/>
            <Text textAlign='center' fontSize='16px' mt='16px'>Praia</Text>
          </Box>
          <Box display='flex' flexDirection='column' alignItems='center' mt='24px'>
            <Image src='/icons/building.svg' boxSize='65px'/>
            <Text textAlign='center' fontSize='16px' mt='16px'>Moderno</Text>
          </Box>
          <Box display='flex' flexDirection='column' alignItems='center' mt='24px'>
            <Image src='/icons/museum.svg' boxSize='65px'/>
            <Text textAlign='center' fontSize='16px' mt='16px'>Clássico</Text>
          </Box>
          <Box display='flex' flexDirection='column' alignItems='center' mt='24px'>
            <Image src='/icons/earth.svg' boxSize='65px'/>
            <Text textAlign='center' fontSize='16px' mt='16px'>E mais...</Text>
          </Box>
        </Flex>
      :
        <Flex align='center' w='100%' justify='center' h='305px' px={{sm: '50px', lg:'140px'}}>
          <Flex justify='space-between' h='145px' w='100%'>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Image src='/icons/cocktail.svg' boxSize={{sm:'65px', md:'85px'}}/>
              <Text textAlign='center' fontSize={{sm:'16px', md:'24px'}} mt='24px'>Vida Noturna</Text>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Image src='/icons/surf.svg' boxSize={{sm:'65px', md:'85px'}}/>
              <Text textAlign='center' fontSize={{sm:'16px', md:'24px'}} mt='24px'>Praia</Text>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Image src='/icons/building.svg' boxSize={{sm:'65px', md:'85px'}}/>
              <Text textAlign='center' fontSize={{sm:'16px', md:'24px'}} mt='24px'>Moderno</Text>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Image src='/icons/museum.svg' boxSize={{sm:'65px', md:'85px'}}/>
              <Text textAlign='center' fontSize={{sm:'16px', md:'24px'}} mt='24px'>Clássico</Text>
            </Box>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Image src='/icons/earth.svg' boxSize={{sm:'65px', md:'85px'}}/>
              <Text textAlign='center' fontSize={{sm:'16px', md:'24px'}} mt='24px'>E mais...</Text>
            </Box>
          </Flex>
        </Flex>
      }
    </Flex>
    
  )
}