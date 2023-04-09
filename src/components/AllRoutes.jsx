import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import UserList from './UserList'
import PostList from './PostList'
import CreateAccount from './CreateAccount'
import Login from './Login'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path={'/home'} element={<Home />} />
            <Route path={'/userlist'} element={<UserList />} />
            <Route path={'/postlist'} element={<PostList />} />
            <Route path={'/createaccount'} element={<CreateAccount />} />
            <Route path={'/'} element={<Login />} />
        </Routes>
    )
}

export default AllRoutes