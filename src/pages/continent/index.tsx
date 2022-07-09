import { Box, Flex, Text } from "@chakra-ui/react";
import { Banner } from "../../components/Description/Banner";
import { CityBox } from "../../components/Description/CityBox";
import { Information } from "../../components/Description/Information";
import { Header } from "../../components/Header";

type continentProps = {
  continent: {
    name: string;
    subtitle: string;
    banner: string;
    description: string;
  }
}

export default function Description({continent}: continentProps) {
  return(
    <>
      <Header />

      <Banner />

      <Information />

      <Box maxW='1160px' h='700' mx='140px'>
        <Text fontSize={{base:'24px', md:'36px'}} mb='40px'>Cidades +100</Text>

        <Flex gap={{base:'15px', md:'35px'}} flexWrap='wrap'>
          <CityBox />
          <CityBox />
          <CityBox />
          <CityBox />
          <CityBox />
          <CityBox />
        </Flex>
      </Box>

    </>
  )
}