import React, { createContext, useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import axios from 'axios';
import { axiosInstance } from '../../utils/app';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);


    const dashBoardData = async () => {
        try {
            const response = await axiosInstance.get('/dashboard');
            console.log(response);
            if (response.data.valid) {
                console.log(response.data.message);
            } else {
                window.location.href = '/'
            }
        } catch (error) {
            throw error;
        }
    };
    useEffect(() => {
        dashBoardData()
    })
    return (
        <AuthContext.Provider value={{ user, setUser, accessToken, setAccessToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
