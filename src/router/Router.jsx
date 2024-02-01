import { BrowserRouter, Route, Routes } from "react-router-dom"
import Root from "../pages/Root/Root"
import Home from "../pages/Home/Home"
import SingleShow from "../pages/SingleShow/SingleShow"
import BookedTickets from "../pages/BookedTickets/BookedTickets"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Root/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/show/:id" element={<SingleShow/>} />
                <Route path="/tickets" element={<BookedTickets/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router