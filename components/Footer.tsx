import { Flex, Text, useColorMode, Link } from '@chakra-ui/react';

const Footer = () => {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  const date = new Date();
  return (
    <Flex
    justifyContent={'center'}
    paddingBottom={'30px'}
    >
    <Text fontWeight='bold' color={colorSecondary[colorMode]}>2020 - {date.getFullYear()} <Link href='https://github.com/haikelz' target='blank'>Haikel</Link></Text>
    </Flex>
  )
}

export default Footer; 
