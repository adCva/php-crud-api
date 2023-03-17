import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";

function Create() {
    const navigate = useNavigate();
    const [createUser, setCreateUser] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCreateUser(values => ({...values, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost/react-crud/api/users/save`, createUser).then((response) => {
            navigate("/");
        });
    };
    

    return (
        <div>
            <h3 className='text-secondary mb-5'>Create User</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" name="name" id="name" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="email" id="email" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone:</Form.Label>
                    <Form.Control type="text" name="mobile" id="mobile" onChange={handleChange} />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="success" size="lg" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Create;