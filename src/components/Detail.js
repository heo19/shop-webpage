import React, { useState } from 'react'
import './Detail.css'
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';

function Detail(props) {

    let [size, setSize] = useState("Size");

    return (
        <div>
            <div className="spacer" />

            <div className="mainContent">
                <div className="imageContainer">
                    <Image src="holder.js/100px250" fluid />
                </div>
                <div className="infoContainer">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{props.price}</Card.Subtitle>
                            <Card.Text>
                                Select Your Size From Below
                            </Card.Text>

                            <Dropdown>
                                <Dropdown.Toggle variant="Info" id="dropdown-basic">
                                    {size}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => {setSize("7")}}>7</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {setSize("7.5")}}>7.5</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {setSize("8")}}>8</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {setSize("8.5")}}>8.5</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {setSize("9")}}>9</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {setSize("9.5")}}>9.5</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {setSize("10")}}>10</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {setSize("10.5")}}>10.5</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {setSize("11")}}>11</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {setSize("11.5")}}>11.5</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Detail