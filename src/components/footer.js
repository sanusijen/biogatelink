import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaArrowUp
} from 'react-icons/fa';

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const iconStyle = {
    color: 'blue',
    textDecoration: 'none',
    transition: '0.3s',
    fontSize: '18px'
  };

  return (
    <Container fluid>
      
      <div className="copyright">
        &copy; 2025 Biogate. All Right Reserved.
      </div>

      <div className="socials">
        <ul>

          {/* WhatsApp */}
          <li>
            <a
              href="https://wa.me/2348034574285"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
              onMouseEnter={(e) => e.target.style.color = '#25D366'}
              onMouseLeave={(e) => e.target.style.color = 'linear-gradient(90deg, #002244, #004080)'}
            >
              <FaWhatsapp />
            </a>
          </li>

          {/* Facebook */}
          <li>
            <a
              href="https://www.facebook.com/share/1TwUHEAsiy/"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
              onMouseEnter={(e) => e.target.style.color = '#1877F2'}
              onMouseLeave={(e) => e.target.style.color = '#fff'}
            >
              <FaFacebookF />
            </a>
          </li>

          {/* Twitter/X */}
          <li>
            <a
              href="https://x.com/BiogateInternat"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
              onMouseEnter={(e) => e.target.style.color = '#1DA1F2'}
              onMouseLeave={(e) => e.target.style.color = '#fff'}
            >
              <FaTwitter />
            </a>
          </li>

          {/* Instagram */}
          <li>
            <a
              href="https://www.instagram.com/biogateinternationallinks"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
              onMouseEnter={(e) => e.target.style.color = '#E1306C'}
              onMouseLeave={(e) => e.target.style.color = '#fff'}
            >
              <FaInstagram />
            </a>
          </li>

          {/* TikTok */}
          <li>
            <a
              href="https://www.tiktok.com/@biogateinternational"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
              onMouseEnter={(e) => e.target.style.color = '#000'}
              onMouseLeave={(e) => e.target.style.color = '#fff'}
            >
              <FaTiktok />
            </a>
          </li>

        </ul>
      </div>

      {/* Go Top Button */}
      {
        showTopBtn && (
          <div className="go-top" onClick={goTop}>
            <FaArrowUp />
          </div>
        )
      }

    </Container>
  )
}

export default AppFooter;
