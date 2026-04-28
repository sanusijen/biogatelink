import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import img1 from '../assets/images/img1.jpeg';

function AppAbout() {

  const sectionStyle = {
    padding: '70px 20px',
    background: '#f5f7fa',
  };

  const titleStyle = {
    textAlign: 'center',
    fontWeight: '700',
    color: '#002244',
    marginBottom: '10px'
  };

  const subtitleStyle = {
    textAlign: 'center',
    color: '#666',
    marginBottom: '50px'
  };

  const imageStyle = {
    width: '100%',
    height: '500px',
    objectFit: 'cover',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  };

  const textCard = {
    background: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    lineHeight: '1.7',
    color: '#444',
    fontSize: '15px'
  };

  const highlightBox = {
    background: 'linear-gradient(90deg, #002244, #004080)',
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '20px'
  };

  return (
    <section id="about" style={sectionStyle}>
      <Container>

        {/* Title */}
        <h2 style={titleStyle}>About BIOGATE International</h2>
        <p style={subtitleStyle}>Building trust through quality, innovation, and global connections</p>

        <Row className="align-items-center">

          {/* Image */}
          <Col md={6}>
            <Image src={img1} style={imageStyle} />
          </Col>

          {/* Text */}
          <Col md={6}>
            <div style={textCard}>

              <p>
                <strong>BIOGATE International Links Ltd</strong> is a dynamic and diversified company based in Nigeria,
                delivering integrated solutions across logistics, international trade, manufacturing, and technology services.
              </p>

              <p>
                We specialize in freight forwarding, import and export operations, clearing and forwarding,
                production, and ICT solutions, ensuring efficient and reliable service delivery for both
                local and international clients.
              </p>

              <p>
                Our export portfolio includes high-quality agricultural products such as charcoal, hibiscus,
                sesame seeds, ginger, and soybeans. We also handle imports of raw materials, supermarket goods,
                and medical supplies.
              </p>

              <p>
                In addition, our manufacturing unit produces durable plastic containers and mosquito coils,
                while our ICT division provides CCTV installation, computers, smartphones, and IT support services.
              </p>

              {/* Vision */}
              <div style={highlightBox}>
                <h5 style={{ fontWeight: '600' }}>Our Vision</h5>
                <p style={{ margin: 0 }}>
                  To become a globally recognized leader in logistics, trade, and technology,
                  known for excellence, reliability, and innovation.
                </p>
              </div>

              {/* Mission */}
              <div style={highlightBox}>
                <h5 style={{ fontWeight: '600' }}>Our Mission</h5>
                <p style={{ margin: 0 }}>
                  To deliver efficient, secure, and cost-effective solutions that consistently exceed
                  customer expectations.
                </p>
              </div>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;