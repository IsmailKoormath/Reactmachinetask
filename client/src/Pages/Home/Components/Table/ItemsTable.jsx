import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import classes from './UserTable.module.css'
import Pagination from '@mui/material/Pagination';
const ItemsTable = () => {
    const [items,setItems]=useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/api/table').then((Response) => {
            setItems(Response.data)
        })
},[])
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
                        {items.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                            </tr>
                        ))}
                      

                    </tbody>
                </Table>
                <Pagination count={10} variant="outlined" shape="rounded" />

            </div>
        </>
    )
}

export default ItemsTable