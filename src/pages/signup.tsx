import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Link,
  Text,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";
import { getAxiosInstance } from "@/services/api";
import { toast } from "react-toastify";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  const api = getAxiosInstance()
  const router = useRouter();

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Password must contain at least 8 characters!")
      .matches(/[0-9]/, "Password must contain at least a number!")
      .matches(/[a-z]/, "Password must contain at least a lowercase letter!")
      .matches(/[A-Z]/, "Password must contain at least a uppercase letter!")
      .matches(/[^\w]/, "Password must contain at least a special character!")
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
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          const data = {
            name: `${values.firstName} ${values.lastName}`,
            email: values.email,
            password: values.password
          }

          try {
            await api.post('api/auth/signup', data);

            toast.success('Account created with success');
            router.push('/signin')

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
                <Heading fontSize={"4xl"} textAlign={"center"}>
                  Sign up
                </Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                  to enjoy all of our cool features ✌️
                </Text>
              </Stack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <HStack>
                    <Box>
                      <FormControl
                        id="firstName"
                        isRequired
                        isInvalid={!!errors.firstName && touched.firstName}
                      >
                        <FormLabel>First Name</FormLabel>
                        <Field as={Input} type="text" name="firstName" />
                        <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl
                        id="lastName"
                        isRequired
                        isInvalid={!!errors.lastName && touched.lastName}
                      >
                        <FormLabel>Last Name</FormLabel>
                        <Field as={Input} type="text" name="lastName" />
                        <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                      </FormControl>
                    </Box>
                  </HStack>
                  <FormControl
                    id="email"
                    isRequired
                    isInvalid={!!errors.email && touched.email}
                  >
                    <FormLabel>Email address</FormLabel>
                    <Field as={Input} type="email" name="email" />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    id="password"
                    isRequired
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Field
                        as={Input}
                        type={showPassword ? "text" : "password"}
                        name="password"
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
                  <Stack spacing={10} pt={2}>
                    <Button
                      type="submit"
                      loadingText="Submitting"
                      size="lg"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Sign up
                    </Button>
                  </Stack>
                  <Stack pt={6}>
                    <Text align={"center"}>
                      Already a user?{" "}
                      <Link as={NextLink} href="./signin" color={"blue.400"}>
                        Login
                      </Link>
                    </Text>
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
