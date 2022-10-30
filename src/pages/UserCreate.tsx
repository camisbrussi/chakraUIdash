import {
  Flex,
  Box,
  Heading,
  Divider,
  VStack,
  Grid,
  GridItem,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Sidebar } from "../components/Sidebar";

export function UserCreate() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">
            Criar Usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <Grid
              w="100%"
              templateColumns={[
                "repeat(3, 1fr)",
                "repeat(3, 1fr)",
                "repeat(8, 1fr)",
              ]}
              gap="8"
            >
              <GridItem colSpan={3}>
                <Input name="name" label="Nome Completo" />
              </GridItem>
              <GridItem colSpan={3}>
                <Input name="email" label="E-mail" />
              </GridItem>
              <GridItem colSpan={1}>
                <Input name="age" label="Idade" />
              </GridItem>
              <GridItem colSpan={1}>
                <Input name="sex" label="Genêro" />
              </GridItem>
            </Grid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="password" label="Senha" type="password" />
              <Input
                name="password_confirmation"
                label="Confirmação da senha"
                type="password"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end" gap="4">
            <Link to="/users">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
            </Link>
            <Button colorScheme="blue">Salvar</Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
