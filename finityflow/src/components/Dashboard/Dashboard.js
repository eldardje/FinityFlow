import React from "react";
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';


const Dashboard = () => {
    const { logout } = useContext(AuthContext);

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout} bgcolor="red" color="white">Logout</button>
        </div>
    );
};

export default Dashboard