import { Box, Flex, Text } from "@chakra-ui/react";

export function CityBox() {
  return(
    <Box h='279px' w={{base:'200px',md:'240px'}} border='1px' borderColor='#FFBA0880'>
      <Box w='100%' h='170px' backgroundImage="/continents/Europe/ReinoUnido//Londres/Londres.jpg" backgroundSize='cover' />
      <Flex justify='space-between' alignItems='center' pl='24px' py='20px' pr='38px'>
        <Box>
          <Text fontSize='20px' fontWeight='600'>Londres</Text>
          <Text>Reino Unido</Text>
        </Box>
        <Box w='30px' h='30px'  backgroundImage='/continents/Europe/ReinoUnido/icon.png' backgroundSize='cover'/>
      </Flex>
    </Box>
  )
}