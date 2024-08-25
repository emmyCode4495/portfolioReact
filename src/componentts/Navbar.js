import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbar() {

    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() =>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={''} alt="Login"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Link</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="#"><img src={''} alt=""></img></a>
                <a href="#"><img src={''} alt=""></img></a>
                <a href="#"><img src={''} alt=""></img></a>
            </div>
            <button className='vvd' onClick={()=> console.log('connect')}>
                <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar
