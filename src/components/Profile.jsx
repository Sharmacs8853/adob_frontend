import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Profile() {
  let user_stored = localStorage.getItem('user');
  let parsh = JSON.parse(user_stored) || {}

  return (
    <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMWti2dqjMmlrhPBHCUZrjA9sYxPl8A6DZ5ay1CRXJrOkSj2lKhbwkrFcv6vbUd87GOmEEAXrV5mA&usqp=CAU&ec=48665698'
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {parsh.user.name}
            </Heading>
            <Text color={'gray.500'}> {parsh.user.email}</Text>
            <Text color={'gray.500'}> {parsh.user.bio}</Text>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}
