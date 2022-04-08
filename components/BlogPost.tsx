import React from "react";
import NextLink from "next/link";
import { useColorMode, Heading, Text, Flex, Box, Link, useColorModeValue } from "@chakra-ui/react";
import { parseISO, format } from "date-fns";

const BlogPost = ({ title, publishedAt, summary, slug } : {title: any, publishedAt: any, summary: any, slug: any}) => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };
  const card = useColorModeValue('#ECEFF4', '#17354c'); 

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: "none" }}>
        <Box p={4} shadow={'md'} bg={card} mb={10} borderRadius={'md'} display="block" width="100%">
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection={["column", "row"]}
          >
            <Flex
              flexDirection="column"
              align="flex-start"
              justifyContent="start"
              width="100%"
            >
              <Heading size="md" as="h3" mb={1} fontWeight="medium">
                {title}
              </Heading>
            </Flex>

            <Text
              color="gray.500"
              minWidth="140px"
              textAlign={["left", "right"]}
              mb={[4, 0]}
            >
              {format(parseISO(publishedAt), "MMMM dd, yyyy")}
            </Text>
          </Flex>
          <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
