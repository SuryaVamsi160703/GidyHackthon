import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    Height: '100vh',
  },
  header: {
    textAlign: 'center',
    fontSize: '2rem',
    color: 'black',
    marginBottom: '120px',
  }, cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    gap: '20px',
    width: '100%',
    maxWidth: '1200px',
  },
  card: {
    backgroundColor: '#312e2e',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 0, 255, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
    width: '100px',
    transition: 'transform 0.3s, box-shadow 0.3s',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  cardImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 25px rgba(0, 0, 255, 0.7)',
  },
  cardContent: {
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: '1',
    position: 'relative',
    zIndex: 1,
  },
  cardLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  cardHeading: {
    margin: '0',
    fontSize: '0.8rem',
    color: '#E8C872',
    transition: 'color 0.3s',
  },
  cardHeadingHover: {
    color: '#55ca3b',
  },
};

function Academic() {
  const items = [
    'HTML',
    'CSS',
    'JavaScript',
    'MongoDB',
    'React',
    'Express.js',
    'Node.js',
    'Deployment'
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Academic Resources</h1>
      <div style={styles.cardContainer}>
        {items.map(item => (
          <div key={item} style={styles.card}>
            <img
              src={`./Assets/${item}.jpg`} // Image path relative to the public directory
              alt={item}
              style={styles.cardImage}
            />
            <div style={styles.cardContent}>
              <Link to={`/${item.replace(' ', '')}`} style={styles.cardLink}>
                <h3
                  style={styles.cardHeading}
                  onMouseOver={e => e.currentTarget.style.color = styles.cardHeadingHover.color}
                  onMouseOut={e => e.currentTarget.style.color = styles.cardHeading.color}
                >
                  {item}
                </h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="note">
        Apologies for the inconvenience, but due to time constraints, some
        features are not included. I have done my best to address the key aspects.
      </div>
    </div>
  );
}

export default Academic;