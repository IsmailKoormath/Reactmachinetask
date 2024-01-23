import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import classes from './UserTable.module.css'
import Pagination from '@mui/material/Pagination';
const UsersTable = () => {
    return (
        <>
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
                <Pagination count={10} variant="outlined" shape="rounded" />

        </div>
        </> 
    )
}

export default UsersTable