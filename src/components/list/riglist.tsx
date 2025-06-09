import { VStack } from '@chakra-ui/react'
import type { StackProps } from '@chakra-ui/react'
import { RigCard } from '../card/rigcard'
import type { RigData } from '../../types/rigs.interface'


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