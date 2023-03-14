import {
  Heading,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
<<<<<<< HEAD
import { useContext, useEffect } from "react";
import { AppContext } from "@/contexts/app";

export default function Panel() {
  const appContext = useContext(AppContext);
  
  useEffect(() => {
    appContext.onCloseLoading()
  }, [])
=======
import NavBar from "@/components/navbar";

export default function Panel() {
  
>>>>>>> 451bc37bd83f17688c165c83a3a1d1e6a6c4ac97

  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        gap="7"
        wrap="wrap"
        height="100vh"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <Center key={index}  py={6}>
            <Box
              maxW={"270px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Image
                h={"120px"}
                w={"full"}
                src={
                  "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
                objectFit={"cover"}
              />

              <Box p={6}>
                <Stack spacing={0} align={"center"} mb={5}>
                  <Heading
                    fontSize={"2xl"}
                    fontWeight={500}
                    fontFamily={"body"}
                  >
                    Sala {++index}
                  </Heading>
                  <Text color={"gray.500"}>Frontend Developer</Text>
                </Stack>

                <Stack direction={"row"} justify={"center"} spacing={6}>
                  <Stack spacing={0} align={"center"}>
                    <Text fontWeight={600}>23</Text>
                    <Text fontSize={"sm"} color={"gray.500"}>
                      Participantes
                    </Text>
                  </Stack>
                </Stack>

                <Button
                  w={"full"}
                  mt={8}
                  bg={useColorModeValue("#151f21", "gray.900")}
                  color={"white"}
                  rounded={"md"}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                >
                  Participar
                </Button>
              </Box>
            </Box>
          </Center>
        ))}
      </Flex>
    </Box>
  );
}
