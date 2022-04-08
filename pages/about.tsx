import { Flex, Stack, Text, Heading, useColorMode, Link, UnorderedList, ListItem} from '@chakra-ui/react'; 
import Head from 'next/head'; 
import Container from '@/components/Container';
import { SettingsIcon } from '@chakra-ui/icons'; 

const About = () => {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.300",
  };

  return (
    <Container>
      <Head>
        <title>/about</title>
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
          <Heading mb={4} fontSize={20}>
            About 🌸 
          </Heading>
          <Text lineHeight="25px" mb={4} color={colorSecondary[colorMode]}>
            I&#39;m Haikel. From Bangka Belitung Islands 
          </Text>

          <Text lineHeight={'25px'} color={colorSecondary[colorMode]}>
          <UnorderedList>
            <ListItem>Love automotive from i was kid, especially 2tak and JDM Cars.</ListItem>
            <ListItem>Love Linux.</ListItem> 
            <ListItem>Love Turkey and Japan.</ListItem>
          </UnorderedList>
          </Text>

            <Heading mt={8} mb={4} fontSize={20}>
              Contact <SettingsIcon color={'green.500'} />
            </Heading>

          <Text mb={4} color={colorSecondary[colorMode]}>Not really active on social media, but if you want to follow me or just to say Hi, you can find me on: </Text>
          <UnorderedList color={colorSecondary[colorMode]}>
            <ListItem><Link href='https://facebook.com/kelgfx'>Facebook</Link></ListItem>
            <ListItem><Link href='https://t.me/pempek_kapal_selem'>Telegram</Link></ListItem>
            <ListItem><Link href='https://github.com/haikelz'>Github</Link></ListItem>
          </UnorderedList>

        </Flex>
      </Stack>
    </Container>
  );

} 

export default About; 
