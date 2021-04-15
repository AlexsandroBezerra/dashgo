import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Alexsandro G Bezerra</Text>

        <Text color="gray.300" fontSize="small">
          alexsandro.g.bezerra@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Alexsandro G Bezerra"
        src="https://github.com/AlexsandroBezerra.png"
      />
    </Flex>
  )
}
