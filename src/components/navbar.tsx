import { Box, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";

export default function NavBar() {
  const [isSign, setIsSign] = useState(false);
  const router = useRouter();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"flex-end"}>
        {!isSign ? (
          <Fragment>
            <Flex alignItems={"center"}>
              <Button
                variant={"solid"}
                colorScheme={"teal"}
                size={"lg"}
                mr={4}
                onClick={() => router.push("./signin")}
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
                onClick={() => router.push("./signup")}
              >
                Sign up
              </Button>
            </Flex>
          </Fragment>
        ) : (
          <Flex alignItems={"center"}>
            <Button variant={"solid"} colorScheme={"teal"} size={"lg"} mr={4}>
              Logout
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}
