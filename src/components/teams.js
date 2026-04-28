import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const teamsData = [
  {
    id: 1,
    image: require('../assets/images/ceo.jpeg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Mr. Abubakar Sambo',
    designation: 'CEO, Biogate International Links Ltd',
  },
  {
    id: 2,
    image: require('../assets/images/partner.jpeg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Ahmed Afifi',
    designation: 'International Partner',
  }
];

function AppTeams() {

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
    borderRadius: '12px',
    overflow: 'hidden',
    textAlign: 'center',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
    transition: '0.3s',
    marginBottom: '30px'
  };

  const imageWrapper = {
    position: 'relative',
  };

 const imageStyle = {
  width: '100%',
  height: '300px',
  objectFit: 'contain',
  backgroundColor: '#f5f5f5', // optional for empty spaces
};

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,34,68,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: '0.3s'
  };

  const socialStyle = {
    display: 'flex',
    gap: '15px',
  };

  const iconStyle = {
    color: '#fff',
    fontSize: '18px',
    cursor: 'pointer'
  };

  const nameStyle = {
    fontWeight: '600',
    color: '#002244',
    marginTop: '15px'
  };

  const roleStyle = {
    color: '#666',
    fontSize: '14px',
    marginBottom: '15px'
  };

  return (
    <section id="teams" style={sectionStyle}>
      <Container>

        {/* Title */}
        <h2 style={titleStyle}>Our Team</h2>
        <p style={subtitleStyle}>
          Meet the professionals driving our vision and success
        </p>

        <Row>
          {teamsData.map(member => (
            <Col md={6} key={member.id}>

              <div
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector('.overlay').style.opacity = 1;
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector('.overlay').style.opacity = 0;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >

                {/* Image + Overlay */}
                <div style={imageWrapper}>
                  <Image src={member.image} style={imageStyle} />

                  <div className="overlay" style={overlayStyle}>
                    <div style={socialStyle}>
                      <a href={member.fbLink}><FaFacebookF style={iconStyle} /></a>
                      <a href={member.twitterLink}><FaTwitter style={iconStyle} /></a>
                      <a href={member.linkedinLink}><FaLinkedinIn style={iconStyle} /></a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '15px' }}>
                  <h4 style={nameStyle}>{member.name}</h4>
                  <p style={roleStyle}>{member.designation}</p>
                </div>

              </div>

            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}

export default AppTeams;