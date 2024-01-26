import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {

    const [isAuth, setAuth] = useState(false)
    
    const login = (username, password) =>{

        if(username === 'admin' && password === 'admin'){
            setAuth(true)
            return true
        }else {
            setAuth(false)
            return false
        }
    }

    const logout = () =>{
            setAuth(false)
            return false
        }
    
    return (
        <AuthContext.Provider value={{isAuth, setAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;