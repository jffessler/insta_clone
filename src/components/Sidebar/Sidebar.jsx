import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink} from "react-router-dom";

const Sidebar = () => {
  return <Box
    height={"100vh"}
    borderRight={"1px solid"}
    borderColor={"whilteAlpha.300"}
    py={8}
    position={"sticky"}
    top={0}
    left={0}
    px={{base:2,md:4}}
  >
    <Flex Link direction={"column"} gap={10} w={"full"} height={"full"}>
        <Link to={"/"} as={RouterLink} pl={2} display={{base:"none",md:"block"}} cursor={"pointer"}>
            <InstagramLogo />
        </Link>
    </Flex>
    </Box>;
};

export default Sidebar;