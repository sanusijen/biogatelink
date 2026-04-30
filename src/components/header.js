import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/bio.jpeg';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

function AppHeader() {

  const iconStyle = {
    color: '#fff',
    textDecoration: 'none',
    transition: '0.3s',
  };

  const navLinkStyle = {
    color: 'navyblue',
    fontSize: '16px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    margin: '0 10px',
    transition: '0.3s',
  };

  return (
    <div>
 <a
        href="https://wa.me/2348034574285"  // 🔥 PUT YOUR REAL NUMBER HERE
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          width: '60px',
          height: '60px',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          color: '#fff',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '30px',
          boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
          zIndex: 9999   // 🔥 VERY IMPORTANT
        }}
      >
        <FaWhatsapp size={30} />
      </a>
      {/* Top Social Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '15px',
          padding: '10px 40px',
          fontSize: '1.1rem',
          background: 'linear-gradient(90deg, #002244, #004080)',
        }}
      >
        
       <a
  href="https://www.facebook.com/share/1TwUHEAsiy/"
  target="_blank"
  rel="noreferrer"
  style={iconStyle}
>
  <FaFacebookF />
</a>
        <a href="https://x.com/BiogateInternat" target="_blank" rel="noreferrer" style={iconStyle}>
          <FaTwitter />
        </a>
     <a
  href="https://www.instagram.com/biogateinternationallinks?igsh=MWkycDJxNnoybmFxOA=="
  target="_blank"
  rel="noreferrer"
  style={iconStyle}
>
  <FaInstagram />
</a>
  
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" style={{ backgroundColor: '#001a33', padding: '15px 0' }}>
        <Container>

          {/* Logo */}
          <Navbar.Brand>
            <img
              src={logo}
              alt="logo"
              style={{
                height: '55px',
                
              }}
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ backgroundColor: '#fff' }}
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link href="#home" style={navLinkStyle}>Home</Nav.Link>
              <Nav.Link href="#about" style={navLinkStyle}>About</Nav.Link>
              <Nav.Link href="#services" style={navLinkStyle}>Services</Nav.Link>
              <Nav.Link href="#works" style={navLinkStyle}>Our Partners</Nav.Link>
              <Nav.Link href="#teams" style={navLinkStyle}>Teams</Nav.Link>
              <Nav.Link href="#products" style={navLinkStyle}>Products</Nav.Link>
              <Nav.Link href="#contact" style={navLinkStyle}>Contact</Nav.Link>

            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  );
}

export default AppHeader;
