import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReserveTable from "./Components/BookATable";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Reserve-table" element={<ReserveTable />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
