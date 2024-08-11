import React, { useState } from "react";

const videoLinks = [
  "https://www.youtube.com/embed/0O65HU5BqiA?si=AeookvcqVQDtFyn7",
  // <iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  "https://www.youtube.com/embed/D896xCq1hag?si=3fBL77_wsUhOHTW2",
  "https://www.youtube.com/embed/fH7N9YRxMYc?si=vl2aBah4pWZjsBLm",
  "https://www.youtube.com/embed/VIDEO_ID4",
  "https://www.youtube.com/embed/VIDEO_ID5",
  "https://www.youtube.com/embed/VIDEO_ID6",
  "https://www.youtube.com/embed/VIDEO_ID7",
  "https://www.youtube.com/embed/VIDEO_ID8",
  "https://www.youtube.com/embed/VIDEO_ID9",
  "https://www.youtube.com/embed/VIDEO_ID10",
  "https://www.youtube.com/embed/VIDEO_ID11",
  "https://www.youtube.com/embed/VIDEO_ID12",
  "https://www.youtube.com/embed/VIDEO_ID13",
  "https://www.youtube.com/embed/VIDEO_ID14",
  "https://www.youtube.com/embed/VIDEO_ID15",
];

function App() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleButtonClick = () => {
    const newIndex = (currentVideoIndex + 1) % videoLinks.length;
    setCurrentVideoIndex(newIndex);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Mental Health and Personality Development</h1>
      <div style={{ margin: "20px 0" }}>
        <button onClick={handleButtonClick}>Click New New Video</button>
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src={videoLinks[currentVideoIndex]}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div style={{ marginTop: "20px", fontStyle: "italic", color: "gray" }}>
        Apologies for the inconvenience, but due to time constraints, some
        features are not included. I appreciate your understanding and have done
        my best to address the key aspects.
      </div>
    </div>
  );
}

export default App;
