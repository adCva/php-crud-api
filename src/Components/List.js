import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Row, Col, Button } from 'react-bootstrap';


function List() {
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        axios.get("http://localhost/react-crud/api/users").then((response) => {
            setUsers(response.data);
        });
    };

    const deleteUser = (id) => {
        axios.delete(`http://localhost/react-crud/api/user/${id}`).then((response) => {
            getUsers();
        });
    };

    useEffect(() => {
        getUsers();
    }, []);


    return (
        <div>
            <h3 className='text-secondary mb-5'>List Users</h3>
            <Table striped hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th className="d-flex justify-content-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td className="d-flex justify-content-center">
                                    <Row className='w-100'>
                                        <Col>
                                            <Button className='btn-block w-100' variant="success">
                                                <Link to={`edit/${user.id}`} className="link-btn">Edit</Link>
                                            </Button>
                                        </Col>
                                        <Col className="w-100">
                                            <Button className='btn-block w-100' variant="danger" onClick={() => deleteUser(user.id)}>Delete</Button>
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default List;