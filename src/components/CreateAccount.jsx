import React, { useState } from 'react'
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Box,
    Heading,
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

let initialData = {
    "name": "",
    "email": "",
    "password": "",
    "bio": ""
}
const CreateAccount = () => {
    const [formData, setFormData] = useState(initialData);
    const { name, email, password, bio } = formData;
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    //post request for user data
    const postUserData = (data) => {
        axios.post(`https://adob-backend.onrender.com/user`, data)
            .then((result) => {
                console.log('crate res', result.data);
                alert(result.data.mag)
            }).catch((err) => {
                console.log('err from crate page', err);
            });
    }

    //submit function
    const handleSubmit = (event) => {
        event.preventDefault();
        postUserData(formData);
        setFormData(initialData);
        navigate("/login")
    }
    return (
        <>
            <Box width={'100%'} mt={'20px'}>
                <Box width={'50%'} margin={'auto'}>
                    <Heading size={'md'} mb={'10px'}>Create your Account!</Heading>
                    <form onSubmit={handleSubmit}>
                        <Stack pb={6}>
                            <FormControl>
                                <FormLabel>Full Name</FormLabel>
                                <Input
                                    required
                                    placeholder='Full Name'
                                    name='name'
                                    value={name}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    required
                                    placeholder='Email'
                                    name='email'
                                    value={email}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    required
                                    placeholder='Password'
                                    name='password'
                                    value={password}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Bio</FormLabel>
                                <Input
                                    required
                                    placeholder='Write about yourself'
                                    name='bio'
                                    value={bio}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <Link to='/'>Have A account? Login</Link>
                            </FormControl>
                            <FormControl mt={4}>
                                <Button type='submit' colorScheme='pink' mr={3}>
                                    Save
                                </Button>
                            </FormControl>
                        </Stack>
                    </form>
                </Box>
            </Box>
        </>
    )
}

export default CreateAccount