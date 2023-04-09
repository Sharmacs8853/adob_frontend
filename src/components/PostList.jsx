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
import UpdatePost from './modals/UpdatePost'
import ViewPost from './modals/ViewPost'
import { AiOutlineDelete } from "react-icons/ai"
import axios from 'axios'

const PostList = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get(`https://adob-backend.onrender.com/post`)
            .then((result) => {
                setPost(result.data)
            }).catch((err) => {
                console.log('errr', err);
            });
    }, [])
    return (
        <Box m={10} p={10}>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>All The post are Here</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>User_id</Th>
                            <Th>Likes</Th>
                            <Th isNumeric>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            post?.map(ele => (
                                <Tr>
                                    <Td>{ele.user_id}</Td>
                                    <Td>{Object.keys(ele.likes).length}</Td>
                                    <Td isNumeric>
                                        <UpdatePost />&nbsp;
                                        <ViewPost ele={ele} />&nbsp;
                                        <Button colorScheme={'pink'} ><AiOutlineDelete /></Button>
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

export default PostList