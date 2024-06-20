import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { DashboardLayout } from '../../components/Layout';
import { axiosInstance } from '../../utils/app';
import LoadingSpinner from '../../components/LoaderSpinner';

export default function ProtectedRoute() {
  const [refreshToken, setRefreshToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dashBoardData = async () => {
      try {
        const response = await axiosInstance.get('/dashboard');
        console.log(response);
        if (response.data.valid) {
          setRefreshToken(response.data.valid);
          console.log(response.data.message);
        } else {
          window.location.href = '/';
        }
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
        setRefreshToken(null);
      } finally {
        setLoading(false);
      }
    };

    dashBoardData();
  }, []);

  if (loading) {
    return <LoadingSpinner/>; 
  }

  return (
    refreshToken ? (
      <DashboardLayout />
    ) : (
      <Navigate to='/login' replace />  
    )
  );
}