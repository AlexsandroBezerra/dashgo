import { Box, Stack } from '@chakra-ui/react'

import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSession } from './NavSession'

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSession title="GERAL">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsLine}>Usuários</NavLink>
        </NavSession>

        <NavSession title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
          <NavLink icon={RiGitMergeLine}>Automação</NavLink>
        </NavSession>
      </Stack>
    </Box>
  )
}
