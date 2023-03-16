import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value

        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost/react-crud/api/users/save", inputs)
        .then(() => navigate("/"))
    }


    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="phone">Phone: </label>
                    <input type="text" name="mobile" id="mobile" onChange={handleChange}/>
                </div>

                <button>Save</button>
            </form>
        </div>
    )
}

export default CreateUser;