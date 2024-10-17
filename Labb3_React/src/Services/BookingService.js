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

export async function createBooking(numberOfGuests, bookedDate, customerName, email, phoneNumber, tableId) {
    try{
        const booking = { numberOfPeople: parseInt(numberOfGuests), 
            date: new Date(bookedDate), 
            phoneNumber, 
            customerName, 
            email,
            tableId: parseInt(tableId) }
        const response = await axios.post(`${API_URI}/Booking/CreateBooking`, booking);
        return response.status;
    } catch(error){
        console.log("Error making reservation: ", error);
    }
}