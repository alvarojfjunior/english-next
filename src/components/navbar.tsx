import { Box, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/auth";

export default function NavBar() {
  const { isAuth, setIsAuth } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsAuth(false);
  };

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"flex-end"}>
        {!isAuth ? (
          <Fragment>
            <Flex alignItems={"center"}>
              <Button
                variant={"solid"}
                colorScheme={"teal"}
                size={"lg"}
                mr={4}
                onClick={() => router.push("/signin")}
              >
                Login
              </Button>
            </Flex>

            <Flex alignItems={"center"}>
              <Button
                variant={"solid"}
                colorScheme={"teal"}
                size={"lg"}
                mr={4}
                onClick={() => router.push("/signup")}
              >
                Sign up
              </Button>
            </Flex>
          </Fragment>
        ) : (
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"lg"}
              mr={4}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}
