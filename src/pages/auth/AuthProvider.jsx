import React, { createContext, useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import axios from 'axios';
import { axiosInstance } from '../../utils/app';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    return (
        <AuthContext.Provider value={{  }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
