import { useState } from "react";

import "./styles/Navbar.css";
import '../../pages/styles/aboutnav.css';
import '../../pages/styles/projectdiv.css';
import '../../components/about/styles/experiencediv.css';
import '../../pages/styles/contactdiv.css';

const Navbar = () => {
  const [clicked, isClicked] = useState(false);
  const [pathClicked, setPathClicked] = useState('');

  const handleClick = () => {
    isClicked(!clicked);
  };

  const viewPage = (path:string)=>{
    const page = document.querySelector(path);
    page?.scrollIntoView({behavior: "smooth"});
    setPathClicked(path);
    isClicked(!clicked);
  }


  var aboutactiveclass = pathClicked === '.aboutdiv' ? 'linkactive' : '';
  var workactiveclass = pathClicked === '.projectdiv' ? 'linkactive' : '';
  var exactiveclass = pathClicked === '.experiencediv' ? 'linkactive' : '';
  var contactactiveclass = pathClicked === '.contactdiv' ? 'linkactive' : '';

  return (
    <nav className="navbar">
      <label htmlFor="active" className="menu-btn" onClick={handleClick}>
        <span className={`line line1 ${clicked ? "activeline1" : ""}`}></span>
        <span className={`line line2 ${clicked ? "activeline2" : ""}`}></span>
        <span className={`line line3 ${clicked ? "activeline3" : ""}`}></span>
      </label>
      <div className={`wrapper ${clicked ? 'wrapperactive' : 'wrappernotactive'}`}>
        <ul>
          <li >
            <span  onClick={()=>{viewPage(`.aboutdiv`)}}
            className={aboutactiveclass}>About</span>
          </li>
          <li>
            <span className={workactiveclass} onClick={()=>{viewPage(`.projectdiv`)}}>Work</span>
          </li>
          <li>
            <span className={exactiveclass} onClick={()=>{viewPage(`.experiencediv`)}}>Experience</span>
          </li>
          <li>
            <span className={contactactiveclass} onClick={()=>{viewPage(`.contactdiv`)}}>Contact</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
