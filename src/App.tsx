import { Box, Container } from '@chakra-ui/react'
import { useState } from 'react'
import { RigList } from './components'
import { Text } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query'
import RigsService from './service/rigs.service'
import type{ Rig } from './types/rigs.interface'



function App() {
  const [selectedRig, setSelectedRig] = useState<string>()  
  const [refetchInterval, setRefetchInterval] = useState(10000);

  const { data: rigs } = useQuery<Rig[]>({
    queryKey: ['rigs'],
    queryFn: () => RigsService.getRigs(),
    staleTime: 15000,
    refetchInterval: refetchInterval * 1000,
    retry: 2,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,    
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value) {
      setRefetchInterval(parseInt(value));
    }
  };

  return (
    <Box bg="gray.900" minH="100vh" py={6}>  
      <Text style={{marginLeft:25}} fontVariant={'-moz-initial'} color={'white'} fontWeight={'bold'}>Using react-query teste performance</Text>    
      <Text style={{marginLeft:25}} fontVariant={'-moz-initial'} color={'white'}>Refetch Interval: {refetchInterval} seconds</Text>
      <Input placeholder='define time to refetch' type='number' style={{margin:25, width: '50%', color: 'white', fontWeight: 'bold'}} onChange={handleChange}/>
      <Container maxW="4xl">
        <RigList
          rigs={rigs ?? []}
          selectedRigId={selectedRig}
          onRigSelect={setSelectedRig}
        />
      </Container>
    </Box>
  )
}

export default App;