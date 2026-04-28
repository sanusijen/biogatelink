import Carousel from 'react-bootstrap/Carousel';

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
    image: require('../assets/images/sesame.jpeg'),
    title: 'Sesame Seed',
    description:
      'We supply premium-quality sesame seeds for food, oil production, and export markets, ensuring purity, consistency, and reliable global distribution with trusted standards.',
    link: 'https://www.google.com'
  },
  
  {
    id: 3,
    image: require('../assets/images/char.jpeg'),
    title: 'Charcoal',
    description:
      'We supply high-quality charcoal suitable for cooking, heating, and industrial use, offering consistent burn performance and reliable global distribution..',
    link: 'https://www.twitter.com'
  },
    {
    id: 4,
    image: require('../assets/images/img1.jpeg'),
    title: 'Coperate office',
    description:
      'Our corporate office, located at 51 Ring Road, Kano State, Nigeria, serves as the central hub for our operations—coordinating logistics, global trade, and client relations with professionalism, efficiency, and international standards.',
    link: 'https://www.twitter.com'
  },
  {
    id: 5,
    image: require('../assets/images/ch.jpeg'),
    title: 'Charcoal',
    description:
      'We supply high-quality charcoal suitable for cooking, heating, and industrial use, offering consistent burn performance and reliable global distribution..',
    link: 'https://www.twitter.com'
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

      <Carousel fade interval={4000}>

        {heroData.map(hero => (
          <Carousel.Item key={hero.id}>

            {/* Image */}
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

            {/* Caption Overlay */}
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
