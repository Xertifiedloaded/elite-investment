
import axios from 'axios';
import { Navigate } from 'react-router-dom';
export const axiosInstance = axios.create({
  baseURL: 'https://investment-ueya.onrender.com/api/v1',
  // baseURL: 'http://localhost:4000/api/v1',
  withCredentials: true,
});



export const register = async (userData) => {
  try {
    const response = await axiosInstance.post('/register', userData);
    console.log(response);
    // return response.data;
    if (response.data === 'success') {

      window.location.href = '/login'
    } else {
      window.location.href = '/signup'
    }

  } catch (error) {
    throw error.response.data;
  }
};

export const loginDetails = async (credentials) => {
  try {
    const response = await axiosInstance.post('/login', credentials);
    console.log(response);
    // return response.data.data;
    if (response.data.Login) {
      console.log(response.data.Login)
      window.location.href = '/dashboard'
    } else {
      window.location.href = '/'
    }
  } catch (error) {
    throw error.response.data;
  }
};



