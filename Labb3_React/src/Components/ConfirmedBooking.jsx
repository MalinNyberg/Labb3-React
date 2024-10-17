import Button from 'react-bootstrap/Button';

export function ConfirmedBooking() {
    return (
        <>
            <h1 className="main-font">Your booking is confirmed</h1>
            <p className="centre-margin-top">We are looking forward to have you here!</p>
            <Button variant="primary" className="btn-margin btn-center" type="button"><a className="btn-link-color" href="http://localhost:5239">Return to home page</a></Button>
        </>
    )
}