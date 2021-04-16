import { ElementType } from 'react'
import { Link, Text, Icon, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { ActiveLink } from '../ActiveLink'

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  href: string
  children: string
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <Link display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </Link>
    </ActiveLink>
  )
}
