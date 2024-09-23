import React,{useState} from "react";
import { Container,Row,Button,Form} from "react-bootstrap";
import Data from "./Data";
const Create=()=>{
    return (
        <>
      <Container className="p-5 mt-5 w-75 mx-auto shadow">
      <Row>
        <div className="col-md-5">
        <img src="https://th.bing.com/th/id/OIP.ac8_3S3xLspq_imzGv01rgHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="create" className="img-fluid" />   
        </div>
     
        <div className="col-md-7">
        <h3>Add Data here</h3>
        <hr className="w-50 border border-1 border-dark" />
        <Form>
            <div className="form-group mt-3">
                <input type="text" name="name" placeholder="Name *" className="form-control" />
            </div>
            
            <div className="form-group mt-3">
                <input type="text" name="name" placeholder="Email *" className="form-control" />
            </div>
            
            <div className="form-group mt-3">
                <input type="text" name="name" placeholder="Phone *" className="form-control" />
            </div>
            
            <div className="form-group mt-3">
                <input type="text" name="name" placeholder="Address *" className="form-control" />
            </div>
            
            <div className="form-group mt-3">
                <input type="text" name="name" placeholder="PinCode *" className="form-control" />
            </div>
            
            <div className="form-group mt-3">
                <input type="submit" name="adddata" value="Add Data"  className="btn bg-dark text-white btn-md" />
            </div>
        </Form>
        </div>
      </Row>
       
      </Container>
          
        </>
    )
}

export default Create