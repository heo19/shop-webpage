import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div>
            <div className="mainBackgroundImg"></div>

            <Container className="subSection">
                <Row>
                    <Col sm={8} className="subSectionOneImg"></Col>
                    <Col sm={4} className="subSectionOneText">
                        <p className="subSectionItemName">Yes.  This is the Shoe</p>
                        <br />
                        <p className="subSectionItemDescription">
                            Black and White.<br />
                            Classic.<br />
                            This is the shoe that you want.<br />
                            Get it now from the STORE.<br />
                        </p>
                        <br />
                        <Link to="/detail/0"><Button variant="outline-dark" className="subSectionOneButton">Shop Now</Button></Link>
                    </Col>
                </Row>
            </Container>

            <Container className="subSection">
                <Row>
                    <Col sm={4} className="subSectionTwoText">
                        <p className="subSectionItemName textTwo">And,  This is Converse</p>
                        <br />
                        <p className="subSectionItemDescription textTwo">
                            Red And White<br />
                            CLEAN<br />
                            The best converse you can find<br />
                            Get it now AT STORE.<br />
                        </p>
                        <br />
                        <Link to="/detail/2"><Button variant="outline-dark">Shop Now</Button></Link>
                    </Col>
                    <Col sm={8} className="subSectionTwoImg"></Col>
                </Row>
            </Container>

            <Container className="subSection">
                <Row>
                    <Col sm={8} className="subSectionThreeImg"></Col>
                    <Col sm={4} className="subSectionThreeText">
                        <p className="subSectionItemName">Right.  This is the Jordan</p>
                        <br />
                        <p className="subSectionItemDescription">
                            Gray and Orange<br />
                            Best.<br />
                            This is the shoe that everybody want.<br />
                            Get this now At the STORE.<br />
                        </p>
                        <br />
                        <Link to="/detail/3"><Button variant="outline-dark" className="subSectionThreeButton">Shop Now</Button></Link>
                    </Col>
                </Row>
            </Container>
            <br />
        </div>
    )
}

export default Home