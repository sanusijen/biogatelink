import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

/* ✅ IMPORT IMAGES */
import lumpImg from '../assets/images/lump.jpeg';
import briImg from '../assets/images/bri.jpeg';
import fingerImg from '../assets/images/fingers.jpeg';
import gingerImg from '../assets/images/ginger.jpeg';
import sesameImg from '../assets/images/sesame.jpeg';
import gapImg from '../assets/images/gap.jpeg';

import gmiImg from '../assets/images/gmi.jpeg';
import clearingImg from '../assets/images/clearing.jpeg';
import martImg from '../assets/images/mart.jpeg';
import medicalImg from '../assets/images/medicals.jpeg';
import mosquitoImg from '../assets/images/mosquito.jpeg';
import skinImg from '../assets/images/skin.jpeg';

import cctvImg from '../assets/images/cctv.jpeg';
import cpImg from '../assets/images/cp.jpeg';
import saImg from '../assets/images/sa.jpeg';

/* STYLES */
const cardStyle = {
  border: 'none',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
  transition: '0.3s',
  marginBottom: '25px'
};

const titleStyle = {
  fontWeight: '700',
  color: '#002244',
  textAlign: 'center',
  marginBottom: '10px'
};

const subtitleStyle = {
  textAlign: 'center',
  color: '#666',
  marginBottom: '40px',
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const sectionTitle = {
  marginTop: '50px',
  marginBottom: '20px',
  fontWeight: '700',
  color: '#004080'
};

/* DATA */
const blogData = [
  {
    id: 1,
    image: lumpImg,
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Lump Wood Charcoal',
    description:
      'We supply premium lump wood charcoal made from natural hardwood, offering high heat output, low ash content, and long-lasting burn for cooking and industrial use.'
  },
  {
    id: 2,
    image: briImg,
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Briquettes Charcoal',
    description:
      'Our briquettes charcoal is processed for uniform shape and consistent performance, ideal for grilling, heating, and commercial use with efficient and clean burning.'
  },
  {
    id: 3,
    image: fingerImg,
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Fingers Charcoal',
    description:
      'We supply high-quality finger charcoal, known for its uniform shape, quick ignition, and efficient heat output, ideal for cooking and commercial use.'
  },
  {
    id: 4,
    image: gingerImg,
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Ginger',
    description:
      'Fresh and dried ginger supplied in large quantities, carefully sourced and processed for quality assurance.'
  },
  {
    id: 5,
    image: sesameImg,
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Sesame Seeds',
    description:
      'High-grade sesame seeds available in bulk, ideal for export and industrial processing.'
  },
  {
    id: 6,
    image: gapImg,
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'General Agricultural Products',
    description:
      'We supply a wide range of agricultural products tailored to meet the needs of wholesalers and industries.'
  }
];

const importData = [
  {
    id: 1,
    image: gmiImg,
    time: 'Available',
    quantity: 'On Demand',
    title: 'General Merchandise Import',
    description:
      'We handle importation of various goods on demand, ensuring high quality and timely delivery.'
  },
  {
    id: 2,
    image: clearingImg,
    time: 'Available',
    quantity: 'Service',
    title: 'Clearing & Forwarding',
    description:
      'Reliable clearing and forwarding services to ensure safe and efficient delivery of goods nationwide.'
  },
  {
    id: 3,
    image: martImg,
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Supermarket Items',
    description:
      'We supply a wide range of supermarket goods in bulk at affordable prices across Nigeria.'
  },
  {
    id: 4,
    image: medicalImg,
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Medical Supplies',
    description:
      'Quality medical supplies available in large quantities for hospitals, pharmacies, and distributors.'
  },
  {
    id: 5,
    image: mosquitoImg,
    time: 'Available',
    quantity: 'Bulk Production',
    title: 'Mosquito Coils',
    description:
      'We produce and supply mosquito coils in bulk, ensuring affordability and effectiveness.'
  },
  {
    id: 6,
    image: skinImg,
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Raw Skin',
    description:
      'We import and supply high-quality raw skin materials for industrial use.'
  }
];

const ictData = [
  {
    id: 1,
    image: cctvImg,
    time: 'Available',
    quantity: 'Service',
    title: 'CCTV Installation',
    description:
      'Professional CCTV system supply and installation for homes, offices, and organizations.'
  },
  {
    id: 2,
    image: cpImg,
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Computers & Printers',
    description:
      'Affordable computers and printers from trusted brands.'
  },
  {
    id: 3,
    image: saImg,
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Smartphones & Accessories',
    description:
      'Latest smartphones and accessories at competitive prices.'
  }
];

/* COMPONENT */
function AppProducts() {
  return (
    <section
      id="products"
      style={{ padding: '60px 20px', background: '#f5f7fa' }}
    >
      <Container>

        <h2 style={titleStyle}>Our Products & Services</h2>
        <p style={subtitleStyle}>
          Delivering quality, reliability, and value across agriculture, importation, and technology solutions.
        </p>

        <h4 style={sectionTitle}>Export Products</h4>
        <Row>
          {blogData.map(item => (
            <Col md={4} key={item.id}>
              <Card style={cardStyle}>
                <Card.Img src={item.image} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <small style={{ color: 'green' }}>● {item.time}</small>
                  <Card.Title style={{ marginTop: '10px' }}>{item.title}</Card.Title>
                  <p><strong>Quantity:</strong> {item.quantity}</p>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h4 style={sectionTitle}>Imported Goods & Services</h4>
        <Row>
          {importData.map(item => (
            <Col md={4} key={item.id}>
              <Card style={cardStyle}>
                <Card.Img src={item.image} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <small style={{ color: 'green' }}>● {item.time}</small>
                  <Card.Title style={{ marginTop: '10px' }}>{item.title}</Card.Title>
                  <p><strong>Type:</strong> {item.quantity}</p>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h4 style={sectionTitle}>ICT & Technology Solutions</h4>
        <Row>
          {ictData.map(item => (
            <Col md={4} key={item.id}>
              <Card style={cardStyle}>
                <Card.Img src={item.image} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <small style={{ color: 'green' }}>● {item.time}</small>
                  <Card.Title style={{ marginTop: '10px' }}>{item.title}</Card.Title>
                  <p><strong>Type:</strong> {item.quantity}</p>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}

export default AppProducts;
