import Head from 'next/head'
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Pagination } from '../../components/Pagination'

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <>
      <Head>
        <title>Usuários | dashgo</title>
      </Head>

      <Box>
        <Header />

        <Flex
          w="100%"
          my="6"
          maxWidth={1480}
          mx="auto"
          px="6"
        >
          <Sidebar />

          <Box flex="1" borderRadius={8} bg="gray.800" p="8">
            <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal">Usuários</Heading>

              <Button
                as="a"
                size="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Flex>

            <Table
              colorScheme="whiteAlpha"
            >
              <Thead>
                <Tr>
                  <Th px={["4", "4", "6"]} color="gray.300" width="8">
                    <Checkbox colorScheme="pink" />
                  </Th>
                  <Th>Usuários</Th>
                  {isWideVersion && <Th>Data de cadastro</Th>}
                  {isWideVersion && <Th width="8"></Th>}
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td px={["4", "4", "6"]} color="gray.300" width="8">
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Alexsandro G Bezerra</Text>
                      <Text fontSize="sm" color="gray.300">alexsandro.g.bezerra@gmail.com</Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>04 de abril, 2021</Td>}
                  <Td>
                    {isWideVersion && (
                      <Button
                        as="a"
                        size="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Editar
                      </Button>
                    )}
                  </Td>
                </Tr>
              </Tbody>
            </Table>

            <Pagination />
          </Box>
        </Flex>
      </Box>
    </>
  )
}
