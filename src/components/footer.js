import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const iconStyle = {
    color: "#fff",
    textDecoration: "none",
    transition: "0.3s",
    fontSize: "18px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #002244, #004080)",
        padding: "30px 0",
        marginTop: "50px",
      }}
    >
      <Container>
        {/* Footer Content */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {/* Copyright */}
          <div
            style={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            &copy; 2025 Biogate. All Rights Reserved.
          </div>

          {/* Social Icons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/2348034574285"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#25D366")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  "rgba(255,255,255,0.1)")
              }
            >
              <FaWhatsapp />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1TwUHEAsiy/"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#1877F2")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  "rgba(255,255,255,0.1)")
              }
            >
              <FaFacebookF />
            </a>

            {/* Twitter/X */}
            <a
              href="https://x.com/BiogateInternat"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#1DA1F2")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  "rgba(255,255,255,0.1)")
              }
            >
              <FaTwitter />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/biogateinternationallinks"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#E1306C")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  "rgba(255,255,255,0.1)")
              }
            >
              <FaInstagram />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@biogateinternational"
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#000")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  "rgba(255,255,255,0.1)")
              }
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Go To Top Button */}
        {showTopBtn && (
          <div
            onClick={goTop}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              width: "45px",
              height: "45px",
              backgroundColor: "#004080",
              color: "#fff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              zIndex: 999,
              transition: "0.3s",
            }}
          >
            <FaArrowUp />
          </div>
        )}
      </Container>
    </footer>
  );
}

export default AppFooter;
