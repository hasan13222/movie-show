import { Fragment, useContext } from "react";
import { ShowContext } from "../../Providers/ShowProvider";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Swal from 'sweetalert2'

const SingleShow = () => {
  const { shows } = useContext(ShowContext);
  const { id } = useParams();
  const show = shows.find((item) => item.show.id.toString() === id);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const show_name = show?.show?.name;
    const customer_addr = form.address.value;
    const customer_name = form.name.value;
    const bookingDetails = {
        show_name,
        customer_addr,
        customer_name    
    }

    const prevBooking = localStorage.getItem('booking_items');
    const prevBookingArr = JSON.parse(prevBooking);
    if (prevBookingArr){
        prevBookingArr.push(bookingDetails);
        localStorage.setItem("booking_items", JSON.stringify(prevBookingArr));
    } else {
        localStorage.setItem("booking_items", JSON.stringify([bookingDetails]));
    }
    
    Swal.fire("You have successfully booked the ticket");
    handleClose();
  }
  return (
    <>
      <div className="container-fluid singleShow">
        <div className="container singleShow__cont">
          <div className="img_wrapper">
            <img src={show?.show?.image?.original} alt="movie poster" />
          </div>
          <div className="text_wrapper">
            <h3>{show?.show?.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: `${show?.show?.summary}` }} />
            <p>
              <strong>Rating: </strong>
              {show?.show?.rating?.average}
            </p>
            <p>
              <strong>Schedule: </strong>
              {show?.show?.schedule?.days?.map((item, i, arr) => (
                <Fragment key={`shc${i}`}>
                  {item}
                  {i < arr.length - 1 ? ", " : ""}
                </Fragment>
              ))} &nbsp;&nbsp;
              {show?.show?.schedule?.time}
            </p>
            <button onClick={handleShow} className="btn btn-info">
              Book Now
            </button>
          </div>
        </div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{show?.show?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control required name="name" type="text" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="address">
                <Form.Label>Your Address</Form.Label>
                <Form.Control required name="address" type="text" placeholder="Enter Address" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Confirm Booking
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default SingleShow;
