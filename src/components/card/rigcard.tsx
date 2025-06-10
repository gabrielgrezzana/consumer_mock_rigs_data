import { Box, HStack, Text, Flex, Icon } from '@chakra-ui/react'
import { FaCircle } from 'react-icons/fa'
import { StatusBadge } from '../badge/statusbagde'
import { Badge } from '@chakra-ui/react'
import type { Rig } from '../../types/rigs.interface'

interface RigCardProps {
  rigData: Rig
  isSelected?: boolean
  onSelect?: (id: string) => void
  [key: string]: any
}

export const RigCard = ({ rigData, isSelected = false, onSelect, ...props }: RigCardProps) => {
  const getStatusColor = () => {
    switch (rigData.rig_status) {
      case 'active':
        return 'green.400'
      case 'maintenance':
        return 'yellow.400'
      case 'inactive':
        return 'orange.400'
      case 'error':
        return 'red.400'
      default:
        return 'gray.400'
    }
  }

  const getTempColor = () => {
    if (rigData.temp_rig > 75) return 'red.400'
    if (rigData.temp_rig > 65) return 'orange.400'
    return 'green.400'
  }

  return (
    <Box
      bg="gray.800"
      borderRadius="md"
      p={4}
      border={isSelected ? '2px solid' : '1px solid'}
      borderColor={isSelected ? 'blue.400' : 'gray.600'}
      cursor="pointer"
      _hover={{ borderColor: 'gray.500', bg: 'gray.750' }}
      transition="all 0.2s"
      onClick={() => onSelect?.(rigData.id)}
      {...props}
    >
      <Flex justify="space-between" align="center" mb={3}>
        <HStack gap={2}>
          <Icon as={FaCircle} color={getStatusColor()} boxSize={2} />
          <Text color="white" fontWeight="medium" fontSize="sm">
            {rigData.rig_name}
          </Text>
          <Text color="gray.400" fontSize="xs">
            ({rigData.rig_ip_address})
          </Text>
        </HStack>
        
        <HStack gap={2}>
          <Text color="gray.400" fontSize="xs">
            {rigData.temp_rig}°C
          </Text>
          <Text color="gray.400" fontSize="xs">
            {rigData.rig_model}
          </Text>
        </HStack>
      </Flex>

      <HStack gap={2} mb={3}>
        <StatusBadge status={rigData.rig_status}>
          {rigData.rig_status}
        </StatusBadge>
        
        <Badge
          bg={getTempColor()}
          color="white"
          px={2}
          py={1}
          borderRadius="md"
          fontSize="xs"
        >
          {rigData.temp_rig}°C
        </Badge>

        <Badge
          bg="blue.600"
          color="white"
          px={2}
          py={1}
          borderRadius="md"
          fontSize="xs"
        >
          {rigData.rig_type}
        </Badge>
      </HStack>

      <HStack justify="space-between" fontSize="xs" color="gray.400">
        <Text>Location: {rigData.rig_location}</Text>
        <Text>Port: {rigData.rig_port}</Text>
      </HStack>
    </Box>
  )
}