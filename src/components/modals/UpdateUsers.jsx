import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'
import { FiEdit } from 'react-icons/fi'
import axios from 'axios'
const UpdateUsers = ({ ele }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [Data, setData] = useState(ele);
    let { _id, name, email, bio } = Data;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value })
    }

    const UpdateUser = (id) => {
        axios.patch(`https://adob-backend.onrender.com/user/${id}`, Data)
            .then((result) => {
                console.log('update', result.data);
            }).catch((err) => {
                console.log('err', err);
            });
        //getUsers()
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        UpdateUser(_id, Data)

        onClose()
    }
    return (
        <>
            <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                href={'#'}
                _hover={{
                    bg: 'pink.300',
                }}
                onClick={onOpen}><FiEdit /></Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <form onSubmit={handleSubmit}>
                    <ModalContent>
                        <ModalHeader>Update user</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    placeholder='Name'
                                    name='name'
                                    value={name}
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    placeholder='Email'
                                    name='email'
                                    value={email}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Boi</FormLabel>
                                <Input
                                    placeholder='Bio'
                                    name='bio'
                                    value={bio}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button type='submit' colorScheme='blue' mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </>
    )
}

export default UpdateUsers