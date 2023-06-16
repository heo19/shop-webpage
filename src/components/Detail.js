import React, { useState, useEffect } from 'react'
import './Detail.css'
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import itemData from './data.js'
import Alert from 'react-bootstrap/Alert';

import { useDispatch } from "react-redux"
import { addItem } from "./store.js"
import { useParams } from 'react-router-dom'

function Detail() {

    let [size, setSize] = useState("Size");
    let [isAbleToOrder, setIsAbleToOrder] = useState(false);
    let [orderNowText, setOrderNowText] = useState('Pick Your Size');
    let [addToCartText, setAddToCartText] = useState('Pick Your Size');
    let [tabStatus, setTabStatus] = useState(0);
    let [isSucess, setIsSucess] = useState(false);
    let [isFailed, setIsFailed] = useState(false);
    let { id } = useParams();
    let itemInfo = itemData[id];
    let dispatch = useDispatch();


    useEffect(() => {
        if (size !== "Size") {
            setOrderNowText("Order Now");
            setAddToCartText("Add To Cart");
            setIsAbleToOrder(true);
        }
    }, [size]);

    function addItemToCart() {
        if (isAbleToOrder) {
            console.log("Item Added!");
            setIsSucess(true);
            dispatch(addItem({ itemId: itemInfo.id, itemTitle: itemInfo.title, itemPrice : itemInfo.price, itemSize: size, itemQuantity: 1 }));

            let timer1 = setTimeout(() => {
                setIsSucess(false);
                clearTimeout(timer1);
            }, 3000);
        } else {
            setIsFailed(true);
            let timer2 = setTimeout(() => {
                setIsFailed(false);
                clearTimeout(timer2);
            }, 3000);
        }
    }

    return (
        <div className="detail">
            <div className="detailPage">
                <SucessAlert
                    isSucess = {isSucess}
                    isFailed = {isFailed}
                ></SucessAlert>
                <div className="mainContent">
                    <div className="imageContainer">
                        <Image src={itemInfo.img} fluid />
                    </div>

                    <div className="infoContainer">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{itemInfo.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">${itemInfo.price}</Card.Subtitle>
                                <Card.Text>
                                    Select Your Size From Below
                                </Card.Text>

                                <Dropdown>
                                    <Dropdown.Toggle variant="Info" id="dropdown-basic">
                                        {size}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => { setSize("7") }}>7</Dropdown.Item>
                                        <Dropdown.Item onClick={() => { setSize("7.5") }}>7.5</Dropdown.Item>
                                        <Dropdown.Item onClick={() => { setSize("8") }}>8</Dropdown.Item>
                                        <Dropdown.Item onClick={() => { setSize("8.5") }}>8.5</Dropdown.Item>
                                        <Dropdown.Item onClick={() => { setSize("9") }}>9</Dropdown.Item>
                                        <Dropdown.Item onClick={() => { setSize("9.5") }}>9.5</Dropdown.Item>
                                        <Dropdown.Item onClick={() => { setSize("10") }}>10</Dropdown.Item>
                                        <Dropdown.Item onClick={() => { setSize("10.5") }}>10.5</Dropdown.Item>
                                        <Dropdown.Item onClick={() => { setSize("11") }}>11</Dropdown.Item>
                                        <Dropdown.Item onClick={() => { setSize("11.5") }}>11.5</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card.Body>
                        </Card>

                        <Button variant="dark" className="orderButton">{orderNowText}</Button>
                        <Button variant="secondary" className="orderButton" onClick={addItemToCart}>{addToCartText}</Button>

                    </div>
                </div>

                <div className="infoTab">
                    <Nav fill variant="tabs" defaultActiveKey="tab0">
                        <Nav.Item>
                            <Nav.Link onClick={() => { setTabStatus(0) }} eventKey="tab0" className="tabText">More Info</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => { setTabStatus(1) }} eventKey="tab1" className="tabText">Review</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => { setTabStatus(2) }} eventKey="tab2" className="tabText">Q&A</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => { setTabStatus(3) }} eventKey="tab3" className="tabText">Refund/Exchange</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <TabContent tab={tabStatus}></TabContent>
                </div>
            </div>
        </div>
    )
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
                <ListGroup as="ol" numbered>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">This is Sample Review 1</div>
                            Cras justo odio
                        </div>
                        <Badge bg="primary" pill>
                            12
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">This is Sample Review 2</div>
                            Cras justo odio
                        </div>
                        <Badge bg="primary" pill>
                            11
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">This is Sample Review 3</div>
                            Cras justo odio
                        </div>
                        <Badge bg="primary" pill>
                            3
                        </Badge>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        );
    } else if (props.tab === 2) {
        return (
            <div>
                <br />
                <ListGroup as="ol" numbered>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">This is Sample Question</div>
                            And this is Sample Answer
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">This is Sample Question</div>
                            And this is Sample Answer
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">This is Sample Question</div>
                            And this is Sample Answer
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        );
    } else if (props.tab === 3) {
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

function SucessAlert(props) {
    if(props.isSucess) {
        return (
            <Alert key='success' variant='success' className='alertTop'>
                You Have Now Successfully Added a Item to Your Cart!
            </Alert>
        );
    } else if (props.isFailed) {
        return (
            <Alert key='danger' variant='danger' className='alertTop'>
                You Need to Set Your Size First!
            </Alert>
        );
    } else {
        return (
            <div className="spacer" />
        );
    }
}

export default Detail