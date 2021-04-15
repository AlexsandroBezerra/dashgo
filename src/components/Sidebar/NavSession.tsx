import { ReactNode } from 'react'
import { Box, Stack, Text } from '@chakra-ui/layout'

interface NavSessionProps {
  title: string
  children: ReactNode
}

export function NavSession(props: NavSessionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">{props.title}</Text>
      <Stack spacing="4" mt="8" align="stretch">
        {props.children}
      </Stack>
    </Box>
  )
}
