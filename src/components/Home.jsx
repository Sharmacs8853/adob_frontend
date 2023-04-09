import React from 'react'
import "./commanStyle.css"
import { Box } from '@chakra-ui/react'
import Profile from './Profile'
import Posts from './Posts'
const Home = () => {
    let user_stored = localStorage.getItem('user');
    let parsh = JSON.parse(user_stored) || {}
    return (
        <Box className='container'>
            <Box className='post_container'>
                <Posts />
            </Box>
            <Box className='profile_container'>
                {
                    parsh.msg == 'Login successfull' ? <Profile /> : <></>
                }

            </Box>
        </Box>
    )
}

export default Home