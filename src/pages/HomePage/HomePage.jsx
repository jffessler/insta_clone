import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  return (
    <Container maxW={"containerx.lg"}>
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <Box flexGrow={8} py={10}>
          <FeedPosts />
        </Box>
        <Box
          flexGrow={2}
          mt={{ base: 10, md: 0 }}
          display={{ base: "flex", lg: "block" }}
          maxW={"300px"}
        >
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
