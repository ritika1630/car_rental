import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthComp = ({ children }) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!sessionStorage.getItem("token")) {
            navigate("/login")
        }
    }, [])
    return sessionStorage.getItem("token") ? children : null
}

export default AuthComp