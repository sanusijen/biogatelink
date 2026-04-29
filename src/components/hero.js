import Carousel from 'react-bootstrap/Carousel';
import { FaWhatsapp } from 'react-icons/fa';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/zobo.jpeg'),
    title: 'Premium Hibiscus Export',
    description:
      'We supply high-quality hibiscus flowers for food, beverage, and herbal industries with reliable global distribution.',
    link: 'https://www.facebook.com'
  },
   {
  id: 2,
  image: require('../assets/images/ch.jpeg'),
  title: 'Premium Charcoal Supply',
  description:
    'We supply high-quality charcoal for cooking, heating, and industrial use, ensuring long-lasting burn, low ash content, and reliable global distribution.',
  link: 'https://www.facebook.com'
},
{
  id: 3,
  image: require('../assets/images/char.jpeg'),
  title: 'Export Grade Charcoal',
  description:
    'Our export-grade charcoal is carefully processed to deliver consistent performance, eco-friendly production, and dependable supply for international markets.',
  link: 'https://www.facebook.com'
},

{
  id: 4,
  image: require('../assets/images/hibiscus.jpeg'),
  title: 'Premium Hibiscus Export',
  description:
    'We provide high-quality hibiscus flowers for food, beverage, and herbal industries, ensuring rich color, natural taste, and global supply reliability.',
  link: 'https://www.facebook.com'
},
{
  id: 5,
  image: require('../assets/images/zobo.jpeg'),
  title: 'Dried Hibiscus Supply',
  description:
    'Our dried hibiscus is processed under strict standards to maintain purity, freshness, and suitability for export and large-scale production.',
  link: 'https://www.facebook.com'
},

{
  id: 6,
  image: require('../assets/images/sesame.jpeg'),
  title: 'Sesame Seed Export',
  description:
    'We supply premium sesame seeds suitable for oil extraction and food processing, ensuring high purity, excellent oil content, and global distribution.',
  link: 'https://www.facebook.com'
},
{
  id: 7,
  image: require('../assets/images/ses.jpeg'),
  title: 'Natural Sesame Supply',
  description:
    'Our sesame seeds are carefully sourced and cleaned to meet international standards, making them ideal for export and industrial use.',
  link: 'https://www.facebook.com'
},
{
  id: 8,
  image: require('../assets/images/clear.jpeg'),
  title: 'Clearing and Forwarding Services',
  description:
    'We provide efficient clearing and forwarding services, ensuring smooth customs processing, timely cargo handling, and reliable delivery across local and international routes.',
  link: 'https://www.facebook.com'
},


{
  id: 9,
  image: require('../assets/images/plas.jpeg'),
  title: 'Plastic Container Production',
  description:
    'We manufacture durable and high-quality plastic containers for storage, packaging, and industrial use, ensuring strength, safety, and long-lasting performance.',
  link: 'https://www.facebook.com'
},


 
];

function AppHero() {

  const captionStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#fff',
    width: '80%',
    maxWidth: '800px',
    background: 'rgba(0,0,0,0.4)',
    padding: '25px',
    borderRadius: '12px',
    backdropFilter: 'blur(4px)',
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '10px',
  };

  const descStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#f1f1f1',
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    background: 'linear-gradient(90deg, #004080, #0077cc)',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: '600',
    display: 'inline-block',
    transition: '0.3s'
  };

  return (
    <section id="home" style={{ position: 'relative' }}>

      {/* ✅ WhatsApp Floating Button */}
      <a
        href="https://wa.me/2348012345678"  // 🔥 PUT YOUR REAL NUMBER HERE
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
          boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
          zIndex: 9999   // 🔥 VERY IMPORTANT
        }}
      >
        <FaWhatsapp size={30} />
      </a>

      <Carousel fade interval={4000}>
        {heroData.map(hero => (
          <Carousel.Item key={hero.id}>

            <img
              className="d-block w-100"
              src={hero.image}
              alt={`slide ${hero.id}`}
              style={{
                height: '85vh',
                objectFit: 'cover',
                filter: 'brightness(0.6)',
              }}
            />

            <Carousel.Caption style={captionStyle}>
              <h2 style={titleStyle}>{hero.title}</h2>
              <p style={descStyle}>{hero.description}</p>

              <a
                href={hero.link}
                style={buttonStyle}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                Learn More →
              </a>

            </Carousel.Caption>

          </Carousel.Item>
        ))}
      </Carousel>

    </section>
  );
}

export default AppHero;
