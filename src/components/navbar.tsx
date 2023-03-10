import {
  Box,
  Flex,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Fragment, useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isSign, setIsSign] = useState(false);

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"flex-end"}>
        {!isSign ? (
          <Fragment>
            <Flex alignItems={"center"}>
              <Button variant={"solid"} colorScheme={"teal"} size={"lg"} mr={4}>
                <Link href="./signin">Login</Link>
              </Button>
            </Flex>

            <Flex alignItems={"center"}>
              <Button variant={"solid"} colorScheme={"teal"} size={"lg"} mr={4}>
                <Link href="./signup">Sign up</Link>
              </Button>
            </Flex>
          </Fragment>
        ) : (
          <Flex alignItems={"center"}>
            <Button variant={"solid"} colorScheme={"teal"} size={"lg"} mr={4}>
              <Link href="./signup">Logout</Link>
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}
