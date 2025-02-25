import React from "react";
import { useSelector } from "react-redux";

import { Navigate } from 'react-router-dom';

const Private = ({ Component }) => {
    const { isAuthenticated, loading, user } = useSelector(state => state.auth)

    return isAuthenticated ? <Component /> : <Navigate to="/login" />
}

export default Private