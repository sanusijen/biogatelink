import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

/* ✅ IMPORT IMAGES (BEST PRACTICE) */
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
      'We supply premium lump wood charcoal made from natural hardwood, offering high heat output, low ash content, and long-lasting burn.'
  },
  {
    id: 2,
    image: briImg,
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Briquettes Charcoal',
    description:
      'Our briquettes charcoal is processed for uniform shape and consistent performance, ideal for grilling and commercial use.'
  },
  {
    id: 3,
    image: fingerImg,
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Fingers Charcoal',
    description:
      'High-quality finger charcoal with quick ignition, uniform size, and efficient heat output for cooking and industrial use.'
  },
  {
    id: 4,
    image: gingerImg,
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Ginger',
    description:
      'Fresh and dried ginger supplied in bulk, carefully sourced and processed to meet export standards.'
  },
  {
    id: 5,
    image: sesameImg,
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Sesame Seeds',
    description:
      'High-grade sesame seeds with excellent oil content, suitable for export and industrial processing.'
  },
  {
    id: 6,
    image: gapImg,
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'General Agricultural Products',
    description:
      'A wide range of agricultural products supplied to meet the needs of wholesalers and industries.'
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
      'We handle importation of various goods with guaranteed quality and timely delivery.'
  },
  {
    id: 2,
    image: clearingImg,
    time: 'Available',
    quantity: 'Service',
    title: 'Clearing & Forwarding',
    description:
      'Efficient clearing and forwarding services ensuring smooth customs processing and delivery.'
  },
  {
    id: 3,
    image: martImg,
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Supermarket Items',
    description:
      'Bulk supply of supermarket goods at competitive prices across Nigeria.'
  },
  {
    id: 4,
    image: medicalImg,
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Medical Supplies',
    description:
      'Quality medical supplies for hospitals, pharmacies, and distributors.'
  },
  {
    id: 5,
    image: mosquitoImg,
    time: 'Available',
    quantity: 'Bulk Production',
    title: 'Mosquito Coils',
    description:
      'Affordable and effective mosquito coils produced in bulk quantities.'
  },
  {
    id: 6,
    image: skinImg,
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Raw Skin',
    description:
      'High-quality raw skin materials imported for industrial use.'
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
      'Professional CCTV installation services for homes and businesses.'
  },
  {
    id: 2,
    image: cpImg,
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Computers & Printers',
    description:
      'Affordable computers and printers for personal and business use.'
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

        {/* AGRIC */}
        <h4 style={sectionTitle}>Agricultural Products</h4>
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

        {/* IMPORT */}
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

        {/* ICT */}
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
