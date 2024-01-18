import { Box, Button, Image, Input, VStack } from "@chakra-ui/react"
import { useState } from "react";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)
    return(
        // <>
            <Box border={"1px solid grey"} borderRadius={4} padding={5}>
                <VStack spacing={4}>
                    <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />
                    <Input 
                        placeholder="Email"
                        fontSize={14}
                        type="email"
                    />
                    <Input 
                        placeholder="Password"
                        fontSize={14}
                        type="password"
                    />
                    {!isLogin ? (
                        <Input 
                        placeholder="Confirm Password"
                        fontSize={14}
                        type="password"
                    />
                    ) : null}

                    <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
                        {isLogin? "Log In" : "Sign Up"}
                    </Button>
                </VStack>
            </Box>
        // </>
    );
};

export default AuthForm