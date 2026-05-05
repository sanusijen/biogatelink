import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

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

const blogData = [
  {
    id: 1,
    image: require('../assets/images/lumb.jpeg'),
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Lump Wood Charcoal',
    description: 'We supply high-quality hibiscus flowers in both dried and fresh forms,available in bulk quantities for local and export markets.',
  },
  {
    id: 2,
    image: require('../assets/images/charcoal.jpeg'),
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Charcoal',
    description: 'Premium-grade charcoal supplied in large quantities at competitive prices with reliable nationwide delivery.',
  },
  {
    id: 3,
    image: require('../assets/images/soya.jpeg'),
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Soybeans',
    description: 'We provide top-quality soybeans suitable for industrial and domestic use, available in bulk across Nigeria.',
  },
  {
    id: 4,
    image: require('../assets/images/ginger.jpeg'),
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Ginger',
    description: 'Fresh and dried ginger supplied in large quantities, carefully sourced and processed for quality assurance.',
  },
  {
    id: 5,
    image: require('../assets/images/sesame.jpeg'),
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Sesame Seeds',
    description: 'High-grade sesame seeds available in bulk, ideal for export and industrial processing.',
  },
  {
    id: 6,
    image: require('../assets/images/gap.jpeg'),
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'General Agricultural Products',
    description: 'We supply a wide range of agricultural products tailored to meet the needs of wholesalers and industries.',
  }
];

const importData = [
  {
    id: 1,
    image: require('../assets/images/gmi.jpeg'),
    time: 'Available',
    quantity: 'On Demand',
    title: 'General Merchandise Import',
    description: 'We handle importation of various goods on demand, ensuring high quality and timely delivery.',
  },
  {
    id: 2,
    image: require('../assets/images/clearing.jpeg'),
    time: 'Available',
    quantity: 'Service',
    title: 'Clearing & Forwarding',
    description: 'Reliable clearing and forwarding services to ensure safe and efficient delivery of goods nationwide.',
  },
  {
    id: 3,
    image: require('../assets/images/mart.jpeg'),
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Supermarket Items',
    description: 'We supply a wide range of supermarket goods in bulk at affordable prices across Nigeria.',
  },
  {
    id: 4,
    image: require('../assets/images/medicals.jpeg'),
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Medical Supplies',
    description: 'Quality medical supplies available in large quantities for hospitals, pharmacies, and distributors.',
  },
  {
    id: 5,
    image: require('../assets/images/mosquito.jpeg'),
    time: 'Available',
    quantity: 'Bulk Production',
    title: 'Mosquito Coils',
    description: 'We produce and supply mosquito coils in bulk, ensuring affordability and effectiveness.',
  },
  {
    id: 6,
    image: require('../assets/images/skin.jpeg'),
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Raw Skin',
    description: 'We import and supply high-quality raw skin materials for industrial use.',
  }
];

const ictData = [
  {
    id: 1,
    image: require('../assets/images/cctv.jpeg'),
    time: 'Available',
    quantity: 'Service',
    title: 'CCTV Installation',
    description: 'Professional CCTV system supply and installation for homes, offices, and organizations.',
  },
  {
    id: 2,
    image: require('../assets/images/cp.jpeg'),
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Computers & Printers',
    description: 'Affordable computers and printers from trusted brands, suitable for personal and business use.',
  },
  {
    id: 3,
    image: require('../assets/images/sa.jpeg'),
    time: 'Available',
    quantity: 'Bulk Supply',
    title: 'Smartphones & Accessories',
    description: 'Latest smartphones and accessories available at competitive prices for individuals and retailers.',
  }
];

function AppProducts() {
  return (
    <section  section
  id="products"style={{ padding: '60px 20px', background: '#f5f7fa' }}>
      <Container>

        {/* Main Title */}
        <h2 style={titleStyle}>Our Products & Services</h2>
        <p style={subtitleStyle}>
          Delivering quality, reliability, and value across agriculture, importation, and technology solutions.
        </p>

        {/* AGRIC PRODUCTS */}
        <h4 style={sectionTitle}>Export Products</h4>
        <Row>
          {blogData.map(item => (
            <Col md={4} key={item.id}>
              <Card style={cardStyle}>
                <Card.Img variant="top" src={item.image} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <small style={{ color: 'green' }}>● {item.time}</small>
                  <Card.Title style={{ fontWeight: '600', marginTop: '10px' }}>
                    {item.title}
                  </Card.Title>
                  <p style={{ fontSize: '14px', color: '#555' }}>
                    <strong>Quantity:</strong> {item.quantity}
                  </p>
                  <Card.Text style={{ fontSize: '14px', color: '#666' }}>
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* IMPORTED PRODUCTS */}
        <h4 style={sectionTitle}>Imported Goods & Services</h4>
        <Row>
          {importData.map(item => (
            <Col md={4} key={item.id}>
              <Card style={cardStyle}>
                <Card.Img variant="top" src={item.image} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <small style={{ color: 'green' }}>● {item.time}</small>
                  <Card.Title style={{ fontWeight: '600', marginTop: '10px' }}>
                    {item.title}
                  </Card.Title>
                  <p style={{ fontSize: '14px', color: '#555' }}>
                    <strong>Type:</strong> {item.quantity}
                  </p>
                  <Card.Text style={{ fontSize: '14px', color: '#666' }}>
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ICT SERVICES */}
        <h4 style={sectionTitle}>ICT & Technology Solutions</h4>
        <Row>
          {ictData.map(item => (
            <Col md={4} key={item.id}>
              <Card style={cardStyle}>
                <Card.Img variant="top" src={item.image} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <small style={{ color: 'green' }}>● {item.time}</small>
                  <Card.Title style={{ fontWeight: '600', marginTop: '10px' }}>
                    {item.title}
                  </Card.Title>
                  <p style={{ fontSize: '14px', color: '#555' }}>
                    <strong>Type:</strong> {item.quantity}
                  </p>
                  <Card.Text style={{ fontSize: '14px', color: '#666' }}>
                    {item.description}
                  </Card.Text>
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
