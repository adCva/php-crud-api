import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";

function Edit() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [editUser, setEditUser] = useState({});

    const getUser = () => {
        axios.get(`http://localhost/react-crud/api/user/${id}`).then((response) => {
            setEditUser(response.data);
        });
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEditUser(values => ({...values, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost/react-crud/api/users/edi/${id}`, editUser).then(() => {
            navigate("/");
        });
    };

    useEffect(() => {
        getUser();
    }, []);


    return (
        <div>
            <h3 className='text-secondary mb-5'>Edit User</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" name="name" onChange={handleChange} defaultValue={editUser.name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="email"  onChange={handleChange} defaultValue={editUser.email} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone:</Form.Label>
                    <Form.Control type="text" name="mobile" onChange={handleChange} defaultValue={editUser.mobile} />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="success" size="lg" type="submit">Save</Button>
                </div>
            </Form>
        </div>
    )
}

export default Edit;