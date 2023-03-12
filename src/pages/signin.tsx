import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Link,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { getAxiosInstance } from "@/services/api";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/auth";

interface IUserAuth {
  email: string;
  name: string;
  status: number;
  token: string;
  type: number;
}

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const api = getAxiosInstance();
  const { setIsAuth } = useAuth();
  const router = useRouter();

  const SigninSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Password must contain at least 8 characters!")
      .required("Required"),
  });

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        validationSchema={SigninSchema}
        onSubmit={async (values) => {
          const credentials = {
            email: values.email,
            password: values.password,
          };
          try {
            const { data } = await api.post("/api/auth/signin", credentials);
            const userAuth: IUserAuth = data;

            localStorage.setItem("accessToken", JSON.stringify(userAuth.token));
            setIsAuth(true)
            toast.success(`Welcome, ${userAuth.name}`);
            router.push("private/panel");

          } catch (error: any) {
            const errorMessage = error.response.data;
            toast.error(errorMessage);
          }
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"}>Login to your account</Heading>
                <Text fontSize={"lg"} color={"gray.600"}></Text>
              </Stack>

              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <FormControl
                    id="email"
                    isInvalid={!!errors.email && touched.email}
                  >
                    <FormLabel>Email address</FormLabel>
                    <Field as={Input} name="email" />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>

                  <FormControl
                    id="password"
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Field
                        as={Input}
                        name="password"
                        type={showPassword ? "text" : "password"}
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>

                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <FormControl>
                        <Checkbox name={"rememberMe"}>Remember me</Checkbox>
                      </FormControl>
                      <Link as={NextLink} href={"#"}>
                        Forgot password?
                      </Link>
                    </Stack>
                    <Button
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      type={"submit"}
                    >
                      Login
                    </Button>
                    <Stack>
                      <Text align={"center"}>
                        Don't have an account?{" "}
                        <Link as={NextLink} href="./signup" color={"blue.400"}>
                          Sign Up
                        </Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Form>
        )}
      </Formik>
    </Flex>
  );
}
