import React from 'react';
import styles from './personal.css';

function App() {
  return (
    <div className={styles.container}>
      <h1>Mental Health and Personality Development</h1>

      {/* Personal Challenges Section */}
      <section className={styles.section}>
        <h2>Personal Challenges in Studying</h2>
        <p>Many students face various challenges while studying, such as:</p>
        <ul className={styles.list}>
          <li>Difficulty in maintaining focus and concentration.</li>
          <li>Struggles with time management and organization.</li>
          <li>Challenges in understanding complex concepts.</li>
          <li>Procrastination and lack of motivation.</li>
          <li>Balancing study with other responsibilities.</li>
        </ul>
        <p>Identifying and addressing these challenges is crucial for academic success and personal growth.</p>
      </section>

      {/* Google Form Link for 1-on-1 Mentor Meeting */}
      <section className={styles.section}>
        <h2>1-on-1 Mentor Meeting</h2>
        <p>If you would like to discuss your personal challenges and get personalized advice, please schedule a 1-on-1 meeting with a mentor by filling out the form below:</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf7sUWWFu9gUkvh4RKZOKpev3YI-_-2KM19Eczg8UxY58wVBQ/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', padding: '10px 20px', fontSize: '16px', color: '#fff', backgroundColor: '#007BFF', textDecoration: 'none', borderRadius: '4px' }}
        >
          Schedule a Meeting
        </a>
      </section>

      {/* Closing Note */}
      <div style={{ marginTop: "20px", fontStyle: "italic", color: "gray" }}>
        Apologies for the inconvenience, but due to time constraints, some
        features are not include have done my best to address the key aspects.
      </div>
    </div>
  );
}

export default App;
