import React, { useState } from "react";
import Head from "next/head";
import {
  Heading,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Container from "@/components/Container";
import { getAllFilesFrontMatter } from "../lib/mdx";
import BlogPost from "@/components/BlogPost";
import { SearchIcon } from "@chakra-ui/icons";

const Blog = ({ posts } : { posts: any }) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts
    .sort(
      (a: any, b: any) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter: any) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  return (
    <>
      <Head>
        <title>/blog</title>
      </Head>
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 2rem auto"
          p='1rem'
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            px={4}
          >
            <Heading pb={3} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' letterSpacing="tight" mb={4} as="h1" size="2xl">
              Blog ({posts.length} posts)
            </Heading>
            <InputGroup mb={6} mr={4} w="100%">
              <Input
                aria-label="Cari berdasarkan Judul"
                placeholder="Cari berdasarkan Judul"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <InputRightElement>
                <SearchIcon />
              </InputRightElement>
            </InputGroup>
            {!filteredBlogPosts.length && "Yang anda cari tidak ditemukan...."}
            {filteredBlogPosts.map((frontMatter: any) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
        </Stack>
      </Container>
    </>
  );
}

export default Blog;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
