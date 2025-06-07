import { Badge } from '@chakra-ui/react'
import type { BadgeProps } from '@chakra-ui/react'

interface StatusBadgeProps extends Omit<BadgeProps, 'colorScheme'> {
  status: 'online' | 'maintenance' | 'offline' | 'warning'
  children: React.ReactNode
}

export const StatusBadge = ({ status, children, ...props }: StatusBadgeProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'online':
        return { colorScheme: 'green', bg: 'green.500' }
      case 'maintenance':
        return { colorScheme: 'yellow', bg: 'yellow.500' }
      case 'warning':
        return { colorScheme: 'orange', bg: 'orange.500' }
      case 'offline':
        return { colorScheme: 'red', bg: 'red.500' }
      default:
        return { colorScheme: 'gray', bg: 'gray.500' }
    }
  }

  return (
    <Badge
      {...getStatusConfig()}
      color="white"
      px={2}
      py={1}
      borderRadius="md"
      fontSize="xs"
      fontWeight="medium"
      {...props}
    >
      {children}
    </Badge>
  )
}