import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const worksData = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: require('../assets/images/nsc.png'),
    title: 'Nigeria Shippers Council',
    subtitle: 'National shipping regulatory body'
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: require('../assets/images/ncs.jpeg'),
    title: 'Nigeria Customs Service',
    subtitle: 'Customs and trade regulation authority'
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: require('../assets/images/faaan.png'),
    title: 'FAAN',
    subtitle: 'Federal Airports Authority of Nigeria'
  }
];

function AppWorks() {

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
    padding: '25px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
    transition: '0.3s',
    height: '100%',
    cursor: 'pointer'
  };

  const imageStyle = {
    width: '100%',
    height: '120px',
    objectFit: 'contain',
    marginBottom: '15px'
  };

  const titleText = {
    fontWeight: '600',
    color: '#002244',
    fontSize: '18px'
  };

  const subText = {
    color: '#666',
    fontSize: '14px'
  };

  return (
    <section id="works" style={sectionStyle}>
      <Container>

        {/* Title */}
        <h2 style={titleStyle}>Our Trusted Partners</h2>
        <p style={subtitleStyle}>
          We collaborate with reputable organizations to deliver excellence and reliability
        </p>

        <Row>
          {worksData.map((work) => (
            <Col md={4} key={work.id} style={{ marginBottom: '25px' }}>
              
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={cardStyle}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    style={imageStyle}
                  />

                  <h4 style={titleText}>{work.title}</h4>
                  <p style={subText}>{work.subtitle}</p>
                </div>
              </a>

            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}

export default AppWorks;