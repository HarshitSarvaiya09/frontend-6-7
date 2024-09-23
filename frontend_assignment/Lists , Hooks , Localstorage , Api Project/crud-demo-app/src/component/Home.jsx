import React from "react";
import { Container } from "react-bootstrap";    
import { Link } from "react-router-dom";
const Home=()=>{
    return(
        <>
        <Container className="mt-5 bg-white w-75 mx-auto p-5">
        <h1>Crud operations <Link to='/create-data'><button className="float-end btn btn-md btn-dark text-white">Create Data</button></Link></h1>
        <table className="mt-5 w-100 table table-responsive border">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Fname</th>
                <th>Lname</th>
                <th>Email</th>
                <th>Address</th>
                <th>Action</th>

            </tr>

            <tr align="text-center">
                <td>1001</td>
                <td>1001</td>
                <td>1001</td>
                <td>1001</td>
                <td>1001</td>
                <td>1001</td>
                <td>1001</td>
            </tr>
            </table>  
        </Container>
     
        </>
    )
}

export default Home