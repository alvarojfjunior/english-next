import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function CallToActionWithIllustration() {
  const router = useRouter();
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Pratica de conversação{' '}
          <Text as={'span'} color={'purple.300'}>
            agora gratuitamente
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Você está cansado de se sentir constrangido com suas habilidades de fala em inglês?
          Você se encontra lutando para se expressar em inglês, mesmo que tenha estudado a língua por anos?
          Com nosso aplicativo, você finalmente pode superar seus medos e começar a falar inglês com confiança!
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'purple'}
            bg={'purple.400'}
            _hover={{ bg: 'purple.300' }}
            onClick={() => router.push('signup')}>
            Começar agora
          </Button>
          <Button rounded={'full'} px={6}>
            Saiba mais
          </Button>
        </Stack>
        <Flex w={'full'}>
          <Image alt={'Login Image'}
            objectFit={'cover'}
            src={
              'home-image.png'
            } />
        </Flex>
      </Stack>
    </Container>
  );
}
