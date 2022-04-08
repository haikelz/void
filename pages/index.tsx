import Head from "next/head";
import { Image, Link, useColorMode, Heading, Text, Flex, Stack} from "@chakra-ui/react";
import Container from "@/components/Container";

const Index = () => {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.300",
  };

  return (
    <Container>
      <Head>
        <title>/home</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        p="2rem"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>Hi, there!</Heading>
          <Text lineHeight="25px" color={colorSecondary[colorMode]}>
            Welcome! 
          </Text>  
          <Image src="https://cdn.statically.io/gh/haikelz/void/typescript/public/images/Blue.webp" alt='Gambar' mt='1.5rem' /> 
        </Flex>
      </Stack>
    </Container>
  );
}

export default Index; 
