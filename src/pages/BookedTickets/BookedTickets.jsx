import { Fragment, useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const BookedTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const tickets = localStorage.getItem("booking_items");
    const ticketsArray = JSON.parse(tickets);
    setTickets(ticketsArray);
  }, []);
  return (
    <>
      <div className="container-fluid tickets">
        <div className="container tickets__cont py-5">
          {tickets?.length === 0 ? (
            <h2 className="text-center">You have no Tickets</h2>
          ) : (
            <h2 className="text-center">Your Tickets</h2>
          )}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Serial</th>
                <th>Movie Name</th>
                <th>Customer Name</th>
                <th>Customer Address</th>
              </tr>
            </thead>
            <tbody>
              {tickets?.map((ticket, index) => (
                <Fragment key={`ticket-${index}`}>
                  <tr>
                    <td>{index+1}</td>
                    <td>{ticket.show_name}</td>
                    <td>{ticket.customer_name}</td>
                    <td>{ticket.customer_addr}</td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default BookedTickets;
