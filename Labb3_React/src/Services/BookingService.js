import axios from "axios";

const API_URI = 'http://localhost:5112';

export async function checkAvailableTables(reservedDateTime) {
    try{
        const listOfAvailableTables = await axios.get(`${API_URI}/Booking/AvailableTables/${reservedDateTime}`);
        return listOfAvailableTables;
    } catch(error){
        console.log("Error fetching tables: ", error);
    }
}

export async function createBooking(numberOfGuests, bookedDate, customerName, email, phoneNumber, choosenTableId) {
    try{
        const id = parseInt(0);        
        const booking = { 
            id,
            customerName,
            email,
            phoneNumber, 
            tableId: parseInt(choosenTableId),
            numberOfPeople: parseInt(numberOfGuests), 
            date: new Date(bookedDate)}
            console.log(booking);
        const response = await axios.post(`${API_URI}/Booking/CreateBooking`, booking);
        return response.status;
    } catch(error){
        console.log("Error making reservation: ", error);
    }
}