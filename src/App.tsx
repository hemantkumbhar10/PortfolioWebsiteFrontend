import React, { useState, useEffect } from "react";
import {Route, Routes} from "react-router-dom";
import classes from "./App.module.css";
import './pages/styles/contactdiv.css';
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Timer from "./ui/Timer";
import Navbar from "./components/navbar/Navbar";


import LoadingPage from "./ui/LoadingPage";
import NotFound from "./ui/NotFound";



function App() {
  const [isLoading, setIsLoading] = useState(false);



  const handleLoading = () => {
      setIsLoading(true);
  };



  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return (
    <div className={classes.app}>
      {isLoading ? (
        <Routes>
          <Route path="/" element={(
        <>
          <Navbar />
          <Homepage />
          <About
          />
          <Projects />
          <Timer />
          <Contact />
          </>
          )}></Route>
          <Route path='*' element={<NotFound/>} />
          </Routes>
     ) : (
        <LoadingPage />
      )} 
    </div>
  );
}

export default App;
