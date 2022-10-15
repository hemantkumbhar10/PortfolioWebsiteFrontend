import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";
import "./pages/styles/contactdiv.css";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Timer from "./ui/Timer";
import Navbar from "./components/navbar/Navbar";

import LoadingPage from "./ui/LoadingPage";
import NotFound from "./ui/NotFound";

function App() {
  const [isIntro, setIsIntro] = useState<boolean>(false);
  const [isProjects, setIsProjects] = useState<boolean>(false);


  const isIntroLoaded = () => {
    setIsIntro(true);
  };

  const isProjectsLoaded = () => {
    setIsProjects(true);
  };

  return (
    <div className={classes.app}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Homepage />
              <About isIntroLoaded={isIntroLoaded} />
              <Projects isProjectsLoaded={isProjectsLoaded}/>
              <Timer />
              <Contact />
            </>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <LoadingPage displayProperty={(isIntro && isProjects) ? 'none' : 'block' } />
    </div>
  );
}

export default App;
