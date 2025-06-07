
import { Box, Container } from '@chakra-ui/react'
import { useState } from 'react'
import { RigList } from './components'
import { Text } from '@chakra-ui/react'

const mockData = [
  {
    id: "eef779a9-0393-4148-b35b-bc10060a3fe1",
    rig_name: "RIG-13B659",
    temp_rig: 79,
    end_ring_service: "2026-01-12",
    rig_status: "maintenance" as const,
    rig_location: "Location1",
    rig_type: "Workstation",
    rig_model: "RTX4080",
    rig_ip_address: "192.168.52.224",
    rig_port: 7994
  },
  // Adicione mais dados aqui...
]

function App() {
  const [selectedRig, setSelectedRig] = useState<string>()

  return (
    <Box bg="gray.900" minH="100vh" py={6}>
      <Text fontVariant={'-moz-initial'}>Hello World</Text>
      <Container maxW="4xl">
        <RigList
          rigs={mockData}
          selectedRigId={selectedRig}
          onRigSelect={setSelectedRig}
        />
      </Container>
    </Box>
  )
}

export default App;