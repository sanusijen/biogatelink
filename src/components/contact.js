import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppContact() {

  const inputStyle = {
    marginBottom: '15px',
    borderRadius: '8px',
    padding: '12px',
    border: '1px solid #ddd',
  };

  return (
    <section
      id="contact"
      style={{
        padding: '60px 20px',
        background: '#f5f7fa',
      }}
    >
      <Container>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontWeight: '700', color: '#002244' }}>Contact Us</h2>
          <p style={{ color: '#555' }}>Get connected with us</p>
        </div>

        <Row>

          {/* LEFT: FORM */}
          <Col md={6}>
            <div
              style={{
                background: '#fff',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              }}
            >
              <Form>

                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  required
                  style={inputStyle}
                />

                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  required
                  style={inputStyle}
                />

                <Form.Control
                  type="tel"
                  placeholder="Enter your contact number"
                  required
                  style={inputStyle}
                />

                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                  required
                  style={inputStyle}
                />

                <Button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'linear-gradient(90deg, #002244, #004080)',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                  }}
                >
                  Send Message
                </Button>

              </Form>
            </div>
          </Col>

          {/* RIGHT: MAP + INFO */}
          <Col md={6}>

            {/* Map */}
            <div
              style={{
                marginBottom: '20px',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              }}
            >
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Kano,Nigeria&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div
              style={{
                background: '#fff',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              }}
            >
              <p style={{ marginBottom: '10px', color: '#333' }}>
                📧 info@biogateinternational.com.ng
              </p>

              <p style={{ marginBottom: '10px', color: '#333' }}>
                📞 08034574285 / 08025180473
              </p>

              <p style={{ color: '#333' }}>
                📍 51 Ring Road, Kano State, Nigeria
              </p>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppContact;