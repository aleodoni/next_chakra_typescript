import React, { useState, useCallback } from 'react';
import {
  Flex,
  Center,
  Heading,
  Box,
  Input,
  Button,
  Alert,
  AlertIcon,
  useColorMode,
} from '@chakra-ui/core';

const Home: React.FC = () => {
  const [alert, setAlert] = useState<boolean>(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: 'white', dark: 'gray.800' };

  const handleAlert = useCallback(() => {
    setAlert((prevState) => {
      return !prevState;
    });
  }, []);

  return (
    <>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Box
          w="100%"
          h="40rem"
          margin={5}
          justifyContent="flex-end"
          alignItems="center"
          display="flex"
          bg={bgColor[colorMode]}
        >
          <Heading>Acesse o sistema</Heading>
        </Box>
        <Center
          bg={bgColor[colorMode]}
          w="100%"
          h="40rem"
          margin={10}
          padding={20}
          flexDirection="column"
          gridRowGap={3}
        >
          <Input placeholder="Usuário" borderRadius="sm" />
          <Input placeholder="Senha" type="password" borderRadius="sm" />
          <Button
            colorScheme="teal"
            width="100%"
            borderRadius="sm"
            onClick={handleAlert}
          >
            Acessar
          </Button>
          <Button size="sm" onClick={toggleColorMode}>
            Toggle Mode
          </Button>
        </Center>
      </Flex>

      {alert && (
        <Alert status="success" position="fixed" left={0} top={0}>
          <AlertIcon />
          Você pressionou o botão
        </Alert>
      )}
    </>
  );
};

export default Home;
