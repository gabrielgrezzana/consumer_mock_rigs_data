
import { Box, Container } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { RigList } from './components'
import { Text } from '@chakra-ui/react'
import RigsService from './service/rigs.service'



function App() {
  const [selectedRig, setSelectedRig] = useState<string>()
  const [rigs, setRigs] = useState<any>();

  useEffect(() => {
    getRigs();
  },[])

  const getRigs = async () => {
    const response = await RigsService.getRigs();
    setRigs(response);
  }



  return (
    <Box bg="gray.900" minH="100vh" py={6}>
      <Text fontVariant={'-moz-initial'}>Hello World</Text>
      <Container maxW="4xl">
        <RigList
          rigs={rigs}
          selectedRigId={selectedRig}
          onRigSelect={setSelectedRig}
        />
      </Container>
    </Box>
  )
}

export default App;