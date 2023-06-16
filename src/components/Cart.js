import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useDispatch, useSelector } from "react-redux"
import { deleteItem, increaseQuantity, decreaseQuantity } from "./store.js"
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import Alert from 'react-bootstrap/Alert';

import './Cart.css'

function Cart() {
    let cartData = useSelector((state) => state.cart);
    let [tabStatus, setTabStatus] = useState(0);

    function getTotalPrice(){
        var totalPrice = 0;
        for(var i = 0; i < cartData.length; i++){
            totalPrice += (cartData[i].itemPrice * cartData[i].itemQuantity);
        }

        return totalPrice;
    }

    return (
        <div>
            <div className="spacer" />
            <div className="mainContentCart">
                <h2 className="cartTitle">
                    Items In Your Cart
                </h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th className='deleteItemCell'>Delete Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartData.map((cartInfo, index) => {
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
                <NoItemInCart arrayLength={cartData.length} totalPrice={getTotalPrice()}></NoItemInCart>
                <div className="infoTab">
                    <Nav fill variant="tabs" defaultActiveKey="tab0">
                        <Nav.Item>
                            <Nav.Link onClick={() => { setTabStatus(0) }} eventKey="tab0" className="tabText">More Info</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => { setTabStatus(1) }} eventKey="tab1" className="tabText">Refund/Exchange</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <TabContent tab={tabStatus}></TabContent>
                </div>
            </div>
            <br />
        </div>
    )
}

function TableBody(props) {
    let dispatch = useDispatch();
    return (
        <tr>
            <td>{props.index}</td>
            <td>{props.itemName}</td>
            <td>${props.itemPrice}</td>
            <td>{props.itemSize}</td>
            <td>
                {props.itemQuantity}
                <ButtonGroup className="me-2 buttonGroup">
                    <Button variant="outline-dark" onClick={() => {
                        dispatch(increaseQuantity(props.index));
                    }}>+</Button>
                    <Button variant="outline-dark" onClick={() => {
                        dispatch(decreaseQuantity(props.index));
                    }}>-</Button>
                </ButtonGroup>
            </td>
            <td className='deleteItemCell'>
                <Button variant="danger" onClick={() => {
                    dispatch(deleteItem(props.index));
                }}>Delete Item</Button>
            </td>
        </tr>
    );
}

function NoItemInCart(props) {
    if (props.arrayLength === 0) {
        return (
            <div>
                <Alert key='dark' variant='dark'>
                    There is No Item in the Cart!
                </Alert>
                <Link to="/sale"><Button variant="secondary" className="addMoreButtonNoCart">Add More Items</Button></Link>
            </div>

        );
    } else {
        return (
            <div className='actionContainer'>
                <div className='totalPriceContainer'>
                    <p className = 'totalPrice'>Total Price: ${props.totalPrice}</p>
                </div>
                <div className='orderNowButtonGroup'>
                    <Button variant="dark" className="orderNowButton">Order Now</Button>
                    <Link to="/sale"><Button variant="secondary" className="addMoreButton">Add More Items</Button></Link>
                </div>
            </div>

        );
    }
}

function TabContent(props) {
    let loremText = "Pariatur labore mollit velit commodo adipisicing aliqua excepteur dolor Lorem labore est enim. Sunt reprehenderit aliqua veniam cillum proident. Enim aliquip non consectetur tempor culpa amet enim sunt. Officia deserunt nostrud fugiat consectetur nulla.";
    if (props.tab === 0) {
        return (
            <div className='moreInfoContainer'>
                <br />
                <p className="moreInfoTitle">This is Sample More Info</p>
                <p className="moreInfoText">
                    {loremText}
                    {loremText}
                    {loremText}
                </p>
            </div>
        );
    } else if (props.tab === 1) {
        return (
            <div>
                <br />
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Refund Policy</Accordion.Header>
                        <Accordion.Body className="moreInfoText">
                            {loremText}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Exchange Policy</Accordion.Header>
                        <Accordion.Body className="moreInfoText">
                            {loremText}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    } else {
        return (
            <div>Wrong Tab</div>
        );
    }
}
export default Cart