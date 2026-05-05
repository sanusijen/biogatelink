import Carousel from 'react-bootstrap/Carousel';
import { FaWhatsapp } from 'react-icons/fa';

const heroData = [
  {
    id: 1,
    image: require('../assets/images/building3.jpeg'),
    title: 'Corporate Office',
    description:
      'Our corporate office, located at 51 Ring Road, Kano State, Nigeria, serves as the central hub for coordinating operations, logistics, and client relations with professionalism and efficiency.',
    link: 'https://www.facebook.com'
  },
  {
    id: 2,
    image: require('../assets/images/ch.jpeg'),
    title: 'Premium Charcoal Supply',
    description:
      'We supply high-quality charcoal for cooking, heating, and industrial use with long-lasting burn and low ash content.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../assets/images/chak.jpeg'),
    title: 'Export Grade Charcoal',
    description:
      'Eco-friendly export-grade charcoal processed for consistent performance and international standards.',
    link: 'https://www.facebook.com'
  },
  {
    id: 4,
    image: require('../assets/images/wo.jpeg'),
    title: 'Premium Hibiscus Export',
    description:
      'High-quality hibiscus flowers for food, beverage, and herbal industries with rich color and natural taste.',
    link: 'https://www.facebook.com'
  },
  {
    id: 5,
    image: require('../assets/images/ses.jpeg'),
    title: 'Premium Sesame Seed Export',
    description:
      'Top-grade sesame seeds for oil extraction and food processing with high purity and excellent oil content.',
    link: 'https://www.facebook.com'
  },
  {
    id: 6,
    image: require('../assets/images/plas.jpeg'),
    title: 'Plastic Container Production',
    description:
      'Durable plastic containers designed for storage, packaging, and industrial use with strong material quality.',
    link: 'https://www.facebook.com'
  },
  {
    id: 7,
    image: require('../assets/images/clear.jpeg'),
    title: 'Clearing & Forwarding Services',
    description:
      'Reliable customs clearing and forwarding services ensuring smooth logistics and timely delivery worldwide.',
    link: 'https://www.facebook.com'
  }
];

function AppHero() {
  return (
    <section id="home" style={{ position: 'relative' }}>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/2348034574285"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          width: '60px',
          height: '60px',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          color: '#fff',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '30px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          zIndex: 9999
        }}
      >
        <FaWhatsapp size={30} />
      </a>

      <Carousel fade interval={4000}>

        {heroData.map(hero => (
          <Carousel.Item key={hero.id}>

            {/* Background Image */}
            <img
              className="d-block w-100"
              src={hero.image}
              alt={hero.title}
              style={{
                height: '85vh',
                objectFit: 'cover',
                filter: 'brightness(0.75)'
              }}
            />

            {/* CLEAN TEXT OVERLAY (NO BOX) */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: '#fff',
                width: '85%',
                maxWidth: '900px',
                padding: '20px'
              }}
            >
              <h1
                style={{
                  fontSize: '42px',
                  fontWeight: '800',
                  textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
                  marginBottom: '15px'
                }}
              >
                {hero.title}
              </h1>

              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '1.6',
                  textShadow: '1px 1px 6px rgba(0,0,0,0.6)',
                  marginBottom: '20px'
                }}
              >
                {hero.description}
              </p>

              <a
                href={hero.link}
                style={{
                  padding: '12px 25px',
                  background: '#0077cc',
                  color: '#fff',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block',
                  transition: '0.3s'
                }}
              >
                Learn More →
              </a>
            </div>

          </Carousel.Item>
        ))}

      </Carousel>
    </section>
  );
}

export default AppHero;
