import React from 'react';
import './css/TodoApp.css';
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import WelcomeComponent from './components/WelcomeComponent';
import HeaderComponent from './layout/HeaderComponent';
import FooterComponent from './layout/FooterComponent';
import ErrorComponent from './components/ErrorComponent';
import ListTodosComponent from './components/ListTodosComponent';
import LogoutComponent from './components/LogoutComponent';
import AuthProvider, { useAuth } from './components/AuthContext';

const AuthIndecator = ({children}) => {
   
    const userAuth = useAuth()
    if(userAuth.isAuth){
        return (children) 
    
    }else{
        return <Navigate to="/" />
    }
    
}

const TodoApp = () => {
    return (
        <div className='TodoApp'>
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                        <Routes>
                            <Route path='/' element={<LoginComponent />}></Route>
                            <Route path='/login' element={<LoginComponent />}></Route>
                            <Route path='/welcome/:username' element={
                                <AuthIndecator>
                                    <WelcomeComponent />    
                                </AuthIndecator>
                                }>
                            </Route>
                            <Route path='/todos' element={
                                <AuthIndecator>
                                    <ListTodosComponent />
                                </AuthIndecator>
                                }>
                            </Route>
                            <Route path='/logout' element={<LogoutComponent />}></Route>
                            <Route path='*' element={<ErrorComponent />}></Route>
                        </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
};

export default TodoApp;