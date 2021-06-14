import { useQuery } from 'react-query'

import { api } from '../api'

type User = {
  id: string
  name: string
  email: string
  created_at: string
}

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get('users')

  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return users
}

export function useUsers() {
  const FIVE_SECONDS = 5000

  return useQuery('users', getUsers, { staleTime: FIVE_SECONDS })
}
