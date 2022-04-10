import Giscus from "@giscus/react";
import { Heading } from "@chakra-ui/react";

const Comments = () => {
  return (
    <>
      <Heading fontSize={"3xl"} mb={4}>
        Comments
      </Heading>
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
    </>
  );
};

export default Comments; 
