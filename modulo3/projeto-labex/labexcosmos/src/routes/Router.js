import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import ListTripsPage from '../pages/ListTripsPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route index element={ <HomePage /> } />
            <Route path="login" element={ <LoginPage /> } />
            <Route path="*" element={ <ListTripsPage /> } /> 
            </Routes>
        </BrowserRouter>
    )
}