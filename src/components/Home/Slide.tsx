import { Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

export function Slide(){

  return (
    <Box display='flex' alignItems='center' justifyContent='center' maxW='1240px' m='auto' pb='30px'>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <Text fontSize='1px'>teste</Text>
      <SwiperSlide>
        <Link href='/continent'>
          <a>
            <Box display='flex' alignItems='center' justifyContent='center' h='450px' w='100%' position='relative'>
              <Image 
                position='absolute'
                zIndex='dropdown'
                h='100%'
                w='100%'
                objectFit='cover'
                src='/continents/Europe/Europe1.jpg'
                filter='auto' 
                brightness='40%'>
              </Image>
              <Box position='absolute' zIndex='overlay'>
                <Text fontSize={{base:'24px', sm:'36px'}} fontWeight='700' textAlign='center' color='white'>Europa</Text>
                <Text fontSize={{base:'16px', sm:'24px'}} fontWeight='500' color='white'>O continente mais antigo</Text>
              </Box>
            </Box>
          </a>
        </Link>

      </SwiperSlide>
      <SwiperSlide>
        <Link href='/continent'>
          <a>
            <Box display='flex' alignItems='center' justifyContent='center' h='450px' w='100%' position='relative'>
              <Image 
                position='absolute'
                zIndex='dropdown'
                h='100%'
                w='100%'
                objectFit='cover'
                src='/continents/Asia/Asia1.jpg'
                filter='auto' 
                brightness='40%'>
              </Image>
              <Box position='absolute' zIndex='overlay'>
                <Text fontSize={{base:'24px', sm:'36px'}} fontWeight='700' textAlign='center' color='white'>Ásia</Text>
                <Text fontSize={{base:'16px', sm:'24px'}} fontWeight='500' color='white'>O maior continente</Text>
              </Box>
            </Box>
          </a>
        </Link>

      </SwiperSlide>
      <SwiperSlide>
        <Link href='/continent'>
          <a>
            <Box display='flex' alignItems='center' justifyContent='center' h='450px' w='100%' position='relative'>
              <Image 
                position='absolute'
                zIndex='dropdown'
                h='100%'
                w='100%'
                objectFit='cover'
                src='/continents/America/America1.jpg'
                filter='auto' 
                brightness='40%'>
              </Image>
              <Box position='absolute' zIndex='overlay'>
                <Text fontSize={{base:'24px', sm:'36px'}} fontWeight='700' textAlign='center' color='white'>América</Text>
                <Text fontSize={{base:'16px', sm:'24px'}} fontWeight='500' color='white'>E seus subscontinentes</Text>
              </Box>
            </Box>
          </a>
        </Link>

      </SwiperSlide>
    </Swiper>
    </Box>
  );
}