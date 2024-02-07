import { Box, Flex } from "@chakra-ui/react";
// import { BsGrid3x3 } from "react-icons/bs";

const ProfileTabs = () => {
  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
      gap={{ base: 4, sm: 10 }}
      textTransform={"uppercase"}
      fontWeight={"bold"}
    >
      <Flex borderTop={"1px solid white"}>
        <Box fontSize={20}>{/* <BsGrid3x3 /> */}</Box>
      </Flex>
      <Flex></Flex>
      <Flex></Flex>
    </Flex>
  );
};

export default ProfileTabs;
