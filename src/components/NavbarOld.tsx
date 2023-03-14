import { Box, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import { Fragment } from "react";
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
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}></Flex>
      <Flex h={16} alignItems={"center"} justifyContent={"flex-end"}>
        <Fragment>
          {!isAuth ? (
            <>
              <Flex alignItems={"center"}>
                <Button
                  variant={"link"}
                  colorScheme={"teal"}
                  size={"lg"}
                  mr={4}
                  onClick={() => router.push("/signin")}
                >
                  Entrar
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
                  Criar conta
                </Button>
              </Flex>
            </>
          ) : (
            <>
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
            </>
          )}
        </Fragment>
      </Flex>
    </Box>
  );
}
