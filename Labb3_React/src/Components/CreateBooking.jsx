import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {checkAvailableTables, createBooking } from '../Services/BookingService';
import { ConfirmedBooking } from "./ConfirmedBooking";
import { ChooseTable } from "./ChooseTable";

export default function CreateBooking() {

    const [numberOfGuests, setNumberOfGuests] = useState('');
    const [bookedDateTime, setBookedDateTime] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [availableTables, setAvailableTables] = useState(null);
    const [serverResponse, setServerResponse] = useState('');

    async function getAvailableTables(e){
        e.preventDefault();
        const tableResponse = await checkAvailableTables(bookedDateTime);
        setAvailableTables(tableResponse.data);
        setServerResponse(tableResponse.status);
    }

    async function handleSubmit(tableId){
        const response = await createBooking(numberOfGuests, bookedDateTime, name, email, phoneNo, tableId);
        setServerResponse(response);   
    }
    
    if (serverResponse == 204) { return <ConfirmedBooking /> } 

    if (serverResponse == 200 && availableTables !== null) { return <ChooseTable availableTables={availableTables} sendToCreateBooking={handleSubmit}/> }

    return (
        <>
            <h1 className="main-font">Reserve table</h1>

            <div className="page-content-form">
                <Form onSubmit={getAvailableTables}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Number of Guests</Form.Label>
                        <Form.Control 
                            type="number"
                            value={numberOfGuests} 
                            onChange={(e) => setNumberOfGuests(e.target.value)}
                            required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Select date and time to book a table</Form.Label>
                        <Form.Control 
                            type="datetime-local" 
                            value={bookedDateTime} 
                            onChange={(e) => setBookedDateTime(e.target.value)}
                            required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>PhoneNumber</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={phoneNo} 
                            onChange={(e) => setPhoneNo(e.target.value)}
                            required />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="btn-margin">Choose table</Button>
                </Form>
            </div>
        </>
    )
}