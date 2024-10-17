import CreateBooking from "./CreateBooking";
import Footer from "./Footer";
import Header from "./Header";

export default function BookATable() {
    return (
        <div  className="container">
            <Header />
            <main className="grid-main">
                <CreateBooking />
            </main>
            <Footer />
        </div> 
    )
}