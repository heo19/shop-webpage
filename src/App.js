import Home from './components/Home'
import Sale from './components/Sale'
import Detail from './components/Detail'
import Cart from './components/Cart'

import { Routes, Route, Link } from 'react-router-dom'
import { Navbar, Container, Nav } from "react-bootstrap"

import './App.css'

function App() {



  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand><Link to="/" className="topLogo">STORE</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className='topButton'>Home</Link>
            <Link to="/sale" className='topButton'>Sale</Link>
            <Link to="/cart" className='topButton'>Cart</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/sale" element={<Sale></Sale>} />
        <Route path="/detail/:id" element={<Detail></Detail>} />
        <Route path="/cart" element={<Cart></Cart>} />
      </Routes>


    </div>
  );
}

export default App;
