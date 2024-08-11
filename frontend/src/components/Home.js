import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import styles from "./Home.module.css"; 
import image from "./Assets/image.png";
import image1 from "./Assets/image1.png";
import image2 from "./Assets/image2.png";
import image3 from "./Assets/image3.png";
import image4 from "./Assets/image4.png";
import image5 from "./Assets/image5.png";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(location.state?.user);
  const [loading, setLoading] = useState(!user);

  useEffect(() => {
    if (!user) {
      axios
        .get("http://localhost:3001/user", { withCredentials: true })
        .then((response) => {
          if (response.data.user) {
            setUser(response.data.user);
          } else {
            navigate("/login");
          }
        })
        .catch(() => navigate("/login"))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [user, navigate]);

  if (loading) {
    return (
      <center>
        <h1>Loading...</h1>
      </center>
    );
  }

  return (
    <>
      <h1 className={styles.header}>Welcome Home {user && user.name} !!!</h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src={image}
            alt="Academic Management"
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <Link to="/Academic" className={styles.cardLink}>
              <h3>Academic Management</h3>
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src={image1}
            alt="Mental Health Support"
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <Link to="/Health" className={styles.cardLink}>
              <h3>Mental Health Support</h3>
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src={image2}
            alt="Personal Challenges"
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <Link to="/Personal" className={styles.cardLink}>
              <h3>Personal Challenges</h3>
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src={image3}
            alt="Placement Assistance"
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <Link to="/Placement" className={styles.cardLink}>
              <h3>Placement Assistance</h3>
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <img src={image4} alt="Exam Features" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <Link to="/Exam" className={styles.cardLink}>
              <h3>Exam Features</h3>
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <img src={image5} alt="Feedback" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <Link to="/Feedback" className={styles.cardLink}>
              <h3>Feedback</h3>
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          fontStyle: "italic",
          color: "gray",
          textAlign: "center", // Center text horizontally
          width: "100%", // Ensure the div takes full width for centering text
        }}
      >
        Apologies for the inconvenience, but due to time constraints, some
        features are not included. Have done my best to address the key aspects.
      </div>
    </>
  );
}

export default Home;
