import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function ChooseTable({availableTables, sendToCreateBooking}) {
    return (
        <>
            <h1 className="main-font">Book a table</h1>
            <h2>Choose a table</h2>
            
            {availableTables.map(table => {
                return (
                    <div key={table.tableId}>
                        <Card style={{ width: '18rem' }} className='table-card'>
                            <Card.Body>
                                <Card.Text className='card-p'>Table number: {table.tableNumber}</Card.Text>
                                <Card.Text className='card-p'>Number of seats: {table.numberOfSeats}</Card.Text>
                                <Button variant="primary" onClick={() => sendToCreateBooking(table.tableId)}>Choose</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
            
        </>
    )
}