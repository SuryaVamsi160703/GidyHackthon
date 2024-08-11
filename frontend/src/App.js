import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import { Navbar } from "./components/NavBar";
import Academic from "./components/Academic";
import Health from "./components/health";
import Personal from "./components/Personal";
import Placement from "./components/Placement";
import Exam from "./components/Exam";
import Feedback from "./components/Feedback";
import HTML from './components/pages/HTML';
import CSS from './components/pages/CSS';
import JS from './components/pages/JS';
import MongoDB from './components/pages/MongoDB';
import ReactPage from './components/pages/React';
import ExpressJS from './components/pages/ExpressJS';
import NodeJS from './components/pages/NodeJS';
import Deployment from './components/pages/Deployment';
// import ProtectedRoute from "./Components/ProtectedRoute";
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/user", { withCredentials: true })
      .then((response) => {
        if (response.data.user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(() => setIsLoggedIn(false));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Academic" element={<Academic />} />
          <Route path="/Health" element={<Health />} />
          <Route path="/Personal" element={<Personal />} />
          <Route path="/Placement" element={<Placement />} />
          <Route path="/Exam" element={<Exam />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/HTML" element={<HTML />} />
          <Route path="/CSS" element={<CSS />} />
          <Route path="/JS" element={<JS />} />
          <Route path="/MongoDB" element={<MongoDB />} />
          <Route path="/React" element={<ReactPage />} />
          <Route path="/ExpressJS" element={<ExpressJS />} />
          <Route path="/NodeJS" element={<NodeJS />} />
          <Route path="/Deployment" element={<Deployment />} />
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/home" />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
          <Route
            path="/signup"
            element={
              isLoggedIn ? (
                <Navigate to="/home" />
              ) : (
                <SignUp setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
