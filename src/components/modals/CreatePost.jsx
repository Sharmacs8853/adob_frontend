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
} from '@chakra-ui/react';
import axios from 'axios';

const CreatePost = () => {
    let user_stored = localStorage.getItem('user');
    let parsh = JSON.parse(user_stored) || {}
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null);

    let initialData = {
        "user_id": parsh.user._id,
        "content": "",
    }
    const [formData, setFormData] = useState(initialData);
    const { user_id, content } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const cratePost = (data) => {
        axios.post(`https://adob-backend.onrender.com/post`, data)
            .then((result) => {
                console.log("result form post", result.data)
            }).catch((err) => {
                console.log("errr", err);
            });
    }

    const handleSubmit = () => {
        cratePost(formData);
        setFormData(initialData)
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
                onClick={onOpen}>Create Post</Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Post</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={handleSubmit}>
                        <ModalBody pb={6}>
                            <FormControl>
                                <Input
                                    placeholder='First name'
                                    type='hidden'
                                    name='user_id'
                                    value={user_id}
                                />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Content</FormLabel>
                                <Input
                                    placeholder='Enter content'
                                    name='content'
                                    value={content}
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
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CreatePost