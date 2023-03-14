import { useContext } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useRouter } from "next/router";
import { AuthContext } from "@/contexts/auth";
import Logo from '@/components/Logo';


export default function Navbar() {
  const { isAuth } = useContext(AuthContext);
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    router.push('/')
  };

  return (
    <>
      <Box bg={useColorModeValue('purple.50', 'purple.900')} px={4} py={{ base: 30, md: 2, lg: 2 }}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Logo cursor={"pointer"} onClick={()=> isAuth ? router.push('private') : router.push('/') } height={32}/>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={{ base: 0, md: 5, lg: 5 }}>
              <Menu>
                {!isAuth ? (
                  <Stack direction={{ base: 'column', md: 'row', lg: 'row' }} spacing={{ base: 0, md: 2, lg: 2 }}>
                    {router.pathname.indexOf('signup') <= -1 && <Button
                      variant={"solid"}
                      colorScheme={"purple"}
                      size={"md"}
                      mr={4}
                      onClick={() => router.push("/signup")}
                    >
                      Criar conta
                    </Button>}
                    {router.pathname.indexOf('signin') <= -1 && <Button
                      variant={"link"}
                      colorScheme={"purple"}
                      size={"md"}
                      mr={4}
                      onClick={() => router.push("/signin")}
                    >
                      Entrar
                    </Button>}
                  </Stack>

                ) : (
                  <Stack direction={'row'} spacing={7}>
                    <MenuButton
                      as={Button}
                      rounded={'full'}
                      variant={'link'}
                      cursor={'pointer'}
                      minW={0}>
                      <Avatar
                        size={'sm'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                      />
                    </MenuButton>
                    <MenuList alignItems={'center'}>
                      <br />
                      <Center>
                        <Avatar
                          size={'2xl'}
                          src={'https://avatars.dicebear.com/api/male/username.svg'}
                        />
                      </Center>
                      <br />
                      <Center>
                        <p>Você está logado</p>
                      </Center>
                      <br />
                      <MenuDivider />
                      <MenuItem >Meus dados</MenuItem>
                      <MenuItem onClick={handleLogout} >Sair</MenuItem>
                    </MenuList>
                  </Stack>
                )}

                <Button
                  onClick={toggleColorMode}
                  variant={'link'}
                  cursor={'pointer'} >
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
