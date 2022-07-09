import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box h='370px' position='relative'>
      <Flex 
        justify='space-between' 
        backgroundImage='/Background.png' 
        h='335px'
        pl={{base:'10%', lg:'140px'}}
      >
        <Flex 
          justify='center' 
          align='center'
          flexDir='column' 
          w={{base: '90%', lg: '50%'}} 
        >
          <Text 
            fontSize={{base:'28px', lg:'36px'}} 
            fontWeight='500' 
            lineHeight='50px' 
            color='white'
          >
            5 Continentes,
            infinitas possibilidades.
          </Text>
          <Text 
            fontSize={{ md:'16px', lg:'20px'}} 
            mt='20px' 
            color='white'
          >
            Chegou a hora de tirar do papel a viagem que você  sempre sonhou. 
          </Text>
        </Flex>
        
        {isWideVersion && (
          <Box 
            h='210px' 
            w='320px' 
            position='absolute' 
            right='5%' 
            bottom='10px' 
            backgroundSize='cover' 
            backgroundImage='/Airplane.svg' 
          /> 
        )}
      </Flex>
    </Box>
  );
}