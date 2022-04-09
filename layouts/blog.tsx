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
import Giscus from "@giscus/react";

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
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            {frontMatter.title}
          </Heading>
          <Flex
            justify="space-between"
            align={["initial", "center"]}
            direction={["column", "row"]}
            mt={2}
            w="100%"
            mb={4}
          >
            <Flex align="center">
              <Avatar
                size="xs"
                name="Haikel"
                src="https://avatars.githubusercontent.com/u/77146709?v=4"
                mr={2}
              />
              <Text fontSize="sm" color={textColor[colorMode]}>
                {frontMatter.by} 
                {"Haikel / "}
                {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
              </Text>
            </Flex>
            <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
              {frontMatter.readingTime.text}
            </Text>
          </Flex>
        </Flex>
        {children}
        <Giscus
          id="comments"
          repo="haikelz/void"
          repoId="R_kgDOG4fALg"
          category=""
          categoryId=""
          mapping="specific"
          term="Welcome"
          reactionsEnabled="0"
          emitMetadata="0"
          inputPosition="bottom"
          theme="https://giscus.app/themes/custom_example.css"
          lang="en"
          loading="lazy"
        />
      </Stack>
    </Container>
  );
}

export default BlogLayout; 
