import { VStack } from '@chakra-ui/react'
import type { StackProps } from '@chakra-ui/react'
import { RigCard } from '../card/rigcard'
import type { Rig } from '../../types/rigs.interface'


interface RigListProps extends StackProps {
  rigs: Rig[]
  selectedRigId?: string
  onRigSelect?: (id: string) => void
}

export const RigList = ({ rigs, selectedRigId, onRigSelect, ...props }: RigListProps) => {
  console.log("rigs _>", rigs);
  console.log("tipo:", typeof rigs);
  console.log("é array?", Array.isArray(rigs));
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