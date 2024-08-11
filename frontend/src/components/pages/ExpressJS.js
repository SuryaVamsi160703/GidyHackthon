import React from "react";
// import './CssPage.css'; // Import the CSS file

const js = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title">Intro to  Express</div>
        <div className="desc">
          Learn Express by clicking the link below:
          <br />
          {/* <a
            href="https://example.com" // Replace with the actual URL for learning HTML
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn HTML
          </a> */}
          <br />
          <button
            className="contact-button"
            onClick={() =>
              openLink(
                "https://gidy.ai/template-details/Introduction%20to%JS"
              )
            } // Example button link
          >
            Open Gidy
          </button>
        </div>
        <h2>Steps to Follow in Gidy</h2>
        <ol>
          <li>Create an account after clicking the link </li>
          <li>Open the project page on the linked website.</li>
          <li>Adopt Express as per the instructions on that page.</li>
        </ol>
        <footer className="footer">
          <p>Copyright © Gidy</p>
        </footer>
        <div className="open-source-links">
          <h2>Open Source Links</h2>
          <ul>
            <li>
              <a
                href="https://www.geeksforgeeks.org/html-tutorial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit GeeksforGeeks Express Tutorial
              </a>
            </li>
            <li>
              <a
                href="https://www.freecodecamp.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                FreeCodeCamp
              </a>
            </li>
            <li>
              <a
                href="https://www.w3schools.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                W3Schools
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN Web Docs
              </a>
            </li>
            <li>
              <a
                href="https://www.codecademy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codecademy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default js;
