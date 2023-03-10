import {
  Box,
  Flex,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSignin, setSignIn] = useState();
  const [issignUp, setSignUp] = useState();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"flex-end"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {isSignin ? (
            <Flex alignItems={"center"}>
              <Button variant={"solid"} colorScheme={"teal"} size={"lg"} mr={4}>
                <Link href="./signin">Sign in</Link>
              </Button>
            </Flex>
          ) : (
            <Flex alignItems={"center"}>
              <Button variant={"solid"} colorScheme={"teal"} size={"lg"} mr={4}>
                <Link href="./signin">Login</Link>
              </Button>
            </Flex>
          )}
          {issignUp ? (
            <Flex alignItems={"center"}>
              <Button variant={"solid"} colorScheme={"teal"} size={"lg"} mr={4}>
                <Link href="./signup">Sign Up</Link>
              </Button>
            </Flex>
          ) : (
            <Flex>
              <Button variant={"solid"} colorScheme={"teal"} size={"lg"} mr={4}>
                <Link href="./signup">Sign Up</Link>
              </Button>
            </Flex>
          )}
        </Flex>
      </Box>

      <Flex
        w={"100%"}
        h={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        p={4}
      >
        Main Content Here
      </Flex>
    </>
  );
}
