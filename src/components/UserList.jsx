import { Box, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import UpdateUsers from './modals/UpdateUsers'
import ViewUsers from './modals/ViewUsers';
import { AiOutlineDelete } from "react-icons/ai"
import axios from 'axios';

const UserList = () => {
  const [user, setUser] = useState([]);
  const getUsers = () => {
    axios.get(`https://adob-backend.onrender.com/user`)
      .then((result) => {
        setUser(result.data);
        console.log('get user', result.data);

      }).catch((err) => {
        console.log('err', err);
      });
  }
  const handleDelete = (id) => {
    axios.delete(`https://adob-backend.onrender.com/user/${id}`)
      .then((result) => {
        console.log('delete result', result.data);
      }).catch((err) => {
        console.log("err", err);
      });
    getUsers()
  }
  useEffect(() => {
    getUsers()
  }, [])
  console.log(user);


  return (
    <Box m={10} p={10}>
      <TableContainer>
        <Table variant='striped' colorScheme='teal'>
          <TableCaption>All The post are Here</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Bio</Th>
              <Th isNumeric>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              user?.map(ele => (
                <Tr key={ele._id}>
                  <Td>{ele.name}</Td>
                  <Td>{ele.email}</Td>
                  <Td>{ele.bio}</Td>
                  <Td isNumeric>
                    <UpdateUsers ele={ele} getUsers={getUsers} />&nbsp;
                    <ViewUsers ele={ele} />&nbsp;
                    <Button onClick={() => handleDelete(ele._id)} colorScheme={'pink'} ><AiOutlineDelete /></Button>
                  </Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default UserList