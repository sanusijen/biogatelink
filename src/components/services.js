import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-ship',
    title: 'Export Services',
    description: 'We export premium agricultural products such as charcoal, hibiscus, sesame seeds, ginger, and soybeans, meeting international quality standards.',
  },
  {
    id: 2,
    icon: 'fas fa-truck-loading',
    title: 'Import Services',
    description: 'We provide reliable import services for raw materials, supermarket goods, and medical supplies with efficiency and cost-effectiveness.',
  },
  {
    id: 3,
    icon: 'fas fa-industry',
    title: 'Plastic Container Production',
    description: 'We manufacture durable plastic containers for commercial and industrial use, ensuring consistent quality and bulk supply.',
  },
  {
    id: 4,
    icon: 'fas fa-fire',
    title: 'Mosquito Coil Production',
    description: 'We produce high-quality mosquito coils that offer long-lasting protection for homes and businesses.',
  },
  {
    id: 5,
    icon: 'fas fa-shipping-fast',
    title: 'Clearing & Forwarding',
    description: 'We handle customs processing, freight forwarding, and logistics coordination for smooth and efficient cargo delivery.',
  },
  {
    id: 6,
    icon: 'fas fa-video',
    title: 'IT & Security Solutions',
    description: 'We supply and install CCTV systems and provide modern IT solutions tailored for homes, schools, and organizations.',
  }
];

function AppServices() {

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

  const cardStyle = {
    background: '#fff',
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
    transition: '0.3s',
    height: '100%',
  };

  const iconStyle = {
    fontSize: '40px',
    color: '#004080',
    marginBottom: '15px',
  };

  const headingStyle = {
    fontWeight: '600',
    marginBottom: '10px',
    color: '#002244'
  };

  const textStyle = {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.6'
  };

  return (
    <section id="services" style={sectionStyle}>
      <Container>

        {/* Title */}
        <h2 style={titleStyle}>Our Services</h2>
        <p style={subtitleStyle}>
          Delivering reliable solutions across trade, logistics, production, and technology
        </p>

        <Row>
          {servicesData.map(service => (
            <Col md={4} key={service.id} style={{ marginBottom: '25px' }}>
              <div
                style={cardStyle}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={iconStyle}>
                  <i className={service.icon}></i>
                </div>

                <h4 style={headingStyle}>{service.title}</h4>

                <p style={textStyle}>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}

export default AppServices;