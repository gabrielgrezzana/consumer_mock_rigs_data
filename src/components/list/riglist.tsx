import { VStack } from '@chakra-ui/react'
import type { StackProps } from '@chakra-ui/react'
import { RigCard } from '../card/rigcard'

interface RigData {
  id: string
  rig_name: string
  temp_rig: number
  rig_status: 'online' | 'maintenance' | 'offline' | 'warning'
  rig_location: string
  rig_type: string
  rig_model: string
  rig_ip_address: string
  rig_port: number
  end_ring_service: string
}

interface RigListProps extends StackProps {
  rigs: RigData[]
  selectedRigId?: string
  onRigSelect?: (id: string) => void
}

export const RigList = ({ rigs, selectedRigId, onRigSelect, ...props }: RigListProps) => {
  return (
    <VStack gap={2} align="stretch" {...props}>
      {rigs.map((rig) => (
        <RigCard
          key={rig.id}
          rigData={rig}
          isSelected={selectedRigId === rig.id}
          onSelect={onRigSelect}
        />
      ))}
    </VStack>
  )
}