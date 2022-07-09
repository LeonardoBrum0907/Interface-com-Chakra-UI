import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

export function Header() {
  return (
    <Flex justify='center' align='center' h='100px'>
      <Link href='/'>
        <a>
          <Image src="/Logo.svg" w='180px' />
        </a>
      </Link>
    </Flex>
  );
}