import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Assets/logo.png'
import '../Styles/Navbar.css'

const Navbars = () => {
    return (

        <Navbar expand="lg">
            <Container container>
                <div>
                    <img src={logo} alt="" />
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll></Nav>

                    <div className="drop">

                        <Nav.Link href="#action1">Find Suppliers</Nav.Link>
                        <NavDropdown title="Find Service Tags" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Habot</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Habot</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Habot</NavDropdown.Item>
                        </NavDropdown>

                        <button className='submit'>Login/sign up</button>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Navbars
