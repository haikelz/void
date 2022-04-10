import React from "react";
import Head from "next/head";
import { parseISO, format } from "date-fns";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Container from "@/components/Container";
import Comments from '@/layouts/comments'; 

const BlogLayout = ({ children, frontMatter } : { children: any, frontMatter: any}) => {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  const router = useRouter();
  const slug = router.asPath.replace("/blog", "");
  return (
    <Container>
      <Head>
        <title>{slug} | Haikel</title>
      </Head>
      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        p="2rem"
        maxWidth="700px"
        w="100%"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          w="100%"
        >
          <Heading letterSpacing="tight" textAlign={'center'} textTransform={'uppercase'} lineHeight={1.5} mb={2} as="h1" size="2xl">
            {frontMatter.title}
          </Heading>
          <Flex
            justify="center"
            align={["initial", "center"]} 
            mt={2}
            w="100%"
            mb={4}
          >
              <Text fontSize="sm" color={textColor[colorMode]}>
                {frontMatter.by}  
                {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
                {`. ${frontMatter.readingTime.text}`}
              </Text>
              


          </Flex>
        </Flex>
        {children}
        <Text fontWeight={'medium'} pt={8} fontSize={'xl'}>Penulis</Text>
        <Flex
            align={["initial", "center"]}
            direction={["column", "row"]}
            w="100%"
            
          >
            <Flex align="center" justifyContent={'flex-start'}>
              <Avatar
                size="md"
                name="Haikel"
                src="https://avatars.githubusercontent.com/u/77146709?v=4"
                mr={2}
              />

            <Flex flexDirection={'column'}>
            <Text fontSize="md" fontWeight={'medium'}>
                Haikel 
            </Text>
              <Text fontSize={'xs'} fontWeight={'normal'}>
                Asak kawa ge pacak 
              </Text>
              </Flex>
            </Flex> 
          </Flex>
        <Flex pt={20} width={'full'} flexDirection={'column'}> 
        <Comments />
        </Flex> 
      </Stack>
    </Container>
  );
}

export default BlogLayout; 
