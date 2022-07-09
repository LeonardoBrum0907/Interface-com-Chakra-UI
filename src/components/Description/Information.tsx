import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react"

export function Information() {
  const isMobileVersion = useBreakpointValue({
    base: true,
    sm: false,
  })
  return(
    <>
    {isMobileVersion ? 
      <Box display='flex' alignItems='center' flexDir='column' p='30px'>
        <Flex align='center' justify='center' w='100%'>
          <Flex py='20px' w='100%' justify='space-between'>
            <Box>
              <Text textAlign='center' fontSize='36px' fontWeight='600' color='yellow'>50</Text>
              <Text textAlign='center' fontSize='16px'>Países</Text>
            </Box>
            <Box>
              <Text textAlign='center' fontSize='36px' fontWeight='600' color='yellow'>60</Text>
              <Text textAlign='center' fontSize='16px'>Línguas</Text>
            </Box>
            <Box>
              <Text textAlign='center' fontSize='36px' fontWeight='600' color='yellow'>27</Text>
              <Text textAlign='center' fontSize='16px'>Cidades +100</Text>
            </Box>
          </Flex>
        </Flex>
        <Box w='100%'>
          <Text fontSize='16px'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae laudantium delectus dolore. Possimus quasi ab, optio veniam earum cumque quaerat corrupti quas dolore ea. Nulla asperiores tempore id assumenda! Velit dignissimos culpa saepe vitae necessitatibus, excepturi, veritatis aperiam corrupti tempora inventore ipsam itaque esse nobis sapiente consequuntur natus reprehenderit! Rerum, aliquid facilis laboriosam suscipit fugiat, eligendi incidunt, a quos perferendis magnam perspiciatis quisquam quae ex aut. Ducimus error tempora nisi officiis, totam consequatur aliquid nulla, architecto sed, rerum blanditiis?</Text>
        </Box>
      </Box>
    :
      <Box display='flex' px={{base:'30px', md:'100px'}} py='80px'>
        <Box w='50%'>
          <Text fontSize={{base:'16px', md:'24px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae laudantium delectus dolore. Possimus quasi ab, optio veniam earum cumque quaerat corrupti quas dolore ea. Nulla asperiores tempore id assumenda! Velit dignissimos culpa saepe vitae necessitatibus, excepturi, veritatis aperiam corrupti tempora inventore ipsam itaque esse nobis sapiente consequuntur natus reprehenderit! Rerum, aliquid facilis laboriosam suscipit fugiat, eligendi incidunt, a quos perferendis magnam perspiciatis quisquam quae ex aut. Ducimus error tempora nisi officiis, totam consequatur aliquid nulla, architecto sed, rerum blanditiis?</Text>
        </Box>
        <Flex align='center' justify='center' w='50%'>
          <Flex p={{base:'20px', md:'30px', lg:'50px'}} w='100%' justify='space-between'>
            <Box>
              <Text textAlign='center' fontSize={{base:'36px', md:'48px'}} fontWeight='600' color='yellow'>50</Text>
              <Text textAlign='center' fontSize={{base:'16px', lg:'20px'}}>Países</Text>
            </Box>
            <Box>
              <Text textAlign='center' fontSize={{base:'36px', md:'48px'}} fontWeight='600' color='yellow'>60</Text>
              <Text textAlign='center' fontSize={{base:'16px', lg:'20px'}}>Línguas</Text>
            </Box>
            <Box>
              <Text textAlign='center' fontSize={{base:'36px', md:'48px'}} fontWeight='600' color='yellow'>27</Text>
              <Text textAlign='center' fontSize={{base:'16px', lg:'20px'}}>Cidades +100</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    }
    </>
  )
}