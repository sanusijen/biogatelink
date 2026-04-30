import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/bio.jpeg';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp   // ✅ FIX: import added
} from 'react-icons/fa';

function AppHeader() {

  const iconStyle = {
    color: '#fff',
    textDecoration: 'none',
    transition: '0.3s',
    fontSize: '18px'
  };

  const navLinkStyle = {
    color: '#fff', // ✅ FIX: navyblue is not valid
    fontSize: '16px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    margin: '0 10px',
    transition: '0.3s',
  };

  return (
    <div>

      {/* ✅ Top Social Bar (Now includes WhatsApp) */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '18px',
          padding: '10px 40px',
          background: 'linear-gradient(90deg, #002244, #004080)',
        }}
      >

        <a
          href="https://www.facebook.com/share/1TwUHEAsiy/"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
          onMouseEnter={(e) => e.target.style.color = '#1877F2'}
          onMouseLeave={(e) => e.target.style.color = '#fff'}
        >
          <FaFacebookF />
        </a>

        <a
          href="https://x.com/BiogateInternat"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
          onMouseEnter={(e) => e.target.style.color = '#1DA1F2'}
          onMouseLeave={(e) => e.target.style.color = '#fff'}
        >
          <FaTwitter />
        </a>

        <a
          href="https://www.instagram.com/biogateinternationallinks"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
          onMouseEnter={(e) => e.target.style.color = '#E1306C'}
          onMouseLeave={(e) => e.target.style.color = '#fff'}
        >
          <FaInstagram />
        </a>

        {/* ✅ WhatsApp added properly */}
        <a
          href="https://wa.me/2348034574285"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          onMouseEnter={(e) => e.target.style.color = '#25D366'}
          onMouseLeave={(e) => e.target.style.color = '#fff'}
        >
          <FaWhatsapp />
        </a>

      </div>

      {/* ✅ Main Navbar */}
      <Navbar expand="lg" style={{ backgroundColor: '#001a33', padding: '15px 0' }}>
        <Container>

          <Navbar.Brand>
            <img
              src={logo}
              alt="logo"
              style={{ height: '55px' }}
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
