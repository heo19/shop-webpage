import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { useDispatch } from "react-redux"
import { clearCart } from "./store.js"

function OrderModal(props) {
    let dispatch = useDispatch();

    function orderItems(){
        props.handleClose();
        props.orderSuccess();
        dispatch(clearCart());
    }

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Order Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Size</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.orderItem.map((cartInfo, index) => {
                                return (
                                    <TableBody
                                        key={index}
                                        index={index}
                                        id={cartInfo.itemId}
                                        itemName={cartInfo.itemTitle}
                                        itemPrice={cartInfo.itemPrice}
                                        itemSize={cartInfo.itemSize}
                                        itemQuantity={cartInfo.itemQuantity}
                                    ></TableBody>
                                );
                            })}
                        </tbody>
                    </Table>
                    <div>
                        <p>Total Price: ${props.totalPrice}</p>
                    </div>        
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0000 Sample Ave, Sample City, CA"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Cancel
                    </Button>
                    <Button variant="dark" onClick={orderItems}>
                        Order Now
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function TableBody(props) {
    return (
        <tr>
            <td>{props.index}</td>
            <td>{props.itemName}</td>
            <td>${props.itemPrice}</td>
            <td>{props.itemSize}</td>
            <td>
                {props.itemQuantity}
            </td>
        </tr>
    );
}

export default OrderModal