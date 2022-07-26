import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import PostsFeedPage from '../pages/PostsFeedPage/PostsFeedPage'
import PostDetailsPage from '../pages/PostDetailsPage/PostDetailsPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from '../components/Header/Header'

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/feed' element={<PostsFeedPage />} />
                <Route path='/' element={<PostsFeedPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/feed/post/:id' element={<PostDetailsPage />} />
                <Route element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
