import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            navigate('/user/login');
            return;
        }

        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('http://localhost:4000/users/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.status === 200) {
                    setUser(response.data);
                    setIsLoading(false);
                }
            } catch (err) {
                console.log(err);
                localStorage.removeItem('token');
                navigate('/user/login');
            }
        };

        fetchUserProfile();
    }, [token, navigate, setUser]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default UserProtectWrapper;