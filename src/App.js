import logo from './logo.svg';
import { Navbar, Container, Nav, Row, Col, Button } from "react-bootstrap"
import './App.css';

function App() {



  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">STORE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#sale">Sale</Nav.Link>
            <Nav.Link href="#trending">Trending</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
      <div className="mainBackgroundImg"></div>

      <Container className="subSection">
        <Row>
          <Col sm={8} className="subSectionOneImg"></Col>
          <Col sm={4} className="subSectionOneText">
            <p className="subSectionItemName">Yes. This is the Shoe</p>
            <br/>
            <p className="subSectionItemDescription">
              Black and White.<br/>
              Classic.<br/>
              This is the shoe that you want.<br/>
              Get it now from the STORE.<br/>
            </p>
            <br/>
            <Button variant="outline-dark" className="subSectionOneButton">Shop Now</Button>
          </Col>
        </Row>
      </Container>

      <Container className="subSection">
        <Row>
          <Col sm={4} className="subSectionTwoText">
            <p className="subSectionItemName textTwo">And, This is Converse</p>
            <br/>
            <p className="subSectionItemDescription textTwo">
              Red And White<br/>
              CLEAN<br/>
              The best converse you can find<br/>
              Get it now AT STORE.<br/>
            </p>
            <br/>
            <Button variant="outline-dark">Shop Now</Button>
          </Col>
          <Col sm={8} className="subSectionTwoImg"></Col>
        </Row>
      </Container>

      <Container className="subSection">
        <Row>
          <Col sm={8} className="subSectionThreeImg"></Col>
          <Col sm={4} className="subSectionThreeText">
            <p className="subSectionItemName">Right. This is the Jordan</p>
            <br/>
            <p className="subSectionItemDescription">
              Gray and Orange<br/>
              Best.<br/>
              This is the shoe that everybody want.<br/>
              Get this now At the STORE.<br/>
            </p>
            <br/>
            <Button variant="outline-dark" className="subSectionThreeButton">Shop Now</Button>
          </Col>
        </Row>
      </Container>
      <br/>
    </div>
  );
}

export default App;
