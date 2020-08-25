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
} from '@chakra-ui/core';

const Home: React.FC = () => {
  const [alert, setAlert] = useState<boolean>(false);

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
          h="20rem"
          margin={5}
          justifyContent="flex-end"
          alignItems="center"
          display="flex"
          bg="gray.800"
        >
          <Heading>Acesse o sistema</Heading>
        </Box>
        <Center
          bg="gray.700"
          w="100%"
          h="20rem"
          margin={10}
          padding={20}
          flexDirection="column"
          gridRowGap={3}
        >
          <Input placeholder="Usuário" borderRadius={5} />
          <Input placeholder="Senha" type="password" borderRadius={5} />
          <Button
            colorScheme="teal"
            width="100%"
            borderRadius={5}
            onClick={handleAlert}
          >
            Acessar
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
