import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        axios.get(`http://localhost/react-crud/api/user/${id}`).then((response) => {
            setInputs(response.data)
        })
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value

        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost/react-crud/api/users/edi/${id}`, inputs)
        .then(() => navigate("/"))
    }

    return (
        <div>
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" onChange={handleChange} value={inputs.name} />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" onChange={handleChange} value={inputs.email} />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone: </label>
                        <input type="text" name="mobile" id="mobile" onChange={handleChange} value={inputs.mobile} />
                    </div>

                    <button>Save</button>
                </form>
        </div>
    )
}

export default EditUser;