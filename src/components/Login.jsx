import React, { useEffect, useState } from 'react'
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Box,
    Heading,
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

let initialData = {
    "email": '',
    "password": ""
}

const Login = () => {
    const [formData, setFormData] = useState(initialData);
    const [user, setUser] = useState(null)
    const { email, password } = formData;
    const navigate = useNavigate();
    let user_stored = localStorage.getItem('user') ;
    let parsh = JSON.parse(user_stored) || {}


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    //login request
    const login = (data) => {
        axios.post(`https://adob-backend.onrender.com/user/login`, data)
            .then((result) => {
                console.log('crate res', result.data);
                setUser(result.data);
                alert(result.data.msg)

                localStorage.setItem('user', JSON.stringify(result.data))
            }).catch((err) => {
                console.log('err from crate page', err);
            });
    }

    //submit function
    const handleSubmit = (event) => {
        event.preventDefault();
        login(formData);
        setFormData(initialData);

    }

    useEffect(() => {
        if (parsh.msg === 'Login successfull') {
            navigate('/home')
        }
    }, [handleSubmit])
   // console.log('jsldkjfsld', parsh.msg);
    return (
        <>
            <Box width={'100%'} mt={'20px'}>
                <Box width={'50%'} margin={'auto'}>
                    <Heading size={'md'} mb={'10px'}>Login here!</Heading>
                    <form onSubmit={handleSubmit}>
                        <Stack pb={6}>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    required
                                    placeholder='Enter email'
                                    name='email'
                                    value={email}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    required
                                    placeholder='Enter password'
                                    name='password'
                                    value={password}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <Link to='/createaccount'>New User? Create Account </Link>
                            </FormControl>
                            <FormControl mt={4}>
                                <Button type='submit' colorScheme='pink' mr={3}>
                                    Login
                                </Button>
                            </FormControl>
                        </Stack>
                    </form>
                </Box>
            </Box>
        </>
    )
}

export default Login