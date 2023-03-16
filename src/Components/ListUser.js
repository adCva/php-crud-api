import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

function ListUser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        axios.get("http://localhost/react-crud/api/users").then((response) => {
            
            setUsers(response.data);
            console.log(response.data);
        })
    };


    const deleteUser = (id) => {
        axios.delete(`http://localhost/react-crud/api/user/${id}`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }


    return (
        <div>
            <h1>List User</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, k) => {
                        return (
                            <tr key={k}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Link to={`edit/${user.id}`}>Edit</Link>
                                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ListUser;