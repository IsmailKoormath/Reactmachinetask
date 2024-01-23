import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import classes from './UserTable.module.css'
const UsersTable = () => {
    return (
        <div className={classes.users}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th> Name</th>
                        <th>Quantity</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>

                </tbody>
            </Table>
        </div>
    )
}

export default UsersTable