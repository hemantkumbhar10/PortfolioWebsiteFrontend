import React, { useState, useEffect } from "react";
import axios from "axios";
import {saveAs} from 'file-saver';

import Form from "../components/contact/Form";
import classes from "./styles/Contact.module.css";
import './styles/contactdiv.css';
import hemantslogo from '../assets/svgs/hemantslogo.svg';

//svgs
import insta from '../assets/links/insta.svg';
import linkedin from '../assets/links/linkedin.svg';
import github from '../assets/skillicons/github.png';



const Contact = () => {
  const [resume, setResume] = useState<string>('');



  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_PORT}/resume`);
        if (!data) {
          setResume('');
        }
        setResume(data[0].resumelink)
      } catch (err) {
        setResume('');
      }
    })();
  }, []);

  const downloadResumehandler = () =>{
    saveAs(resume, 'HemantKumbhar_Resume');
};

  return (
    <div className={`contactdiv ${classes.contact}`} >
      <h2>Lets connect!</h2>
      <div className={classes.resume}>
        <h3>Want my resume?</h3>
        <button onClick={downloadResumehandler}>Yes.Please!</button>
      </div>
      <Form />
        <h3 className={classes.socialherotitle}>Socials</h3>
        <div className={classes.socials}>
          <a
            href="https://www.instagram.com/hemant_kk__/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={insta} alt="instagram link" />
          </a>
          <a
            href="https://www.linkedin.com/in/hemant-kumbhar-4a65b8138"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin link" />
          </a>
          <a
            href="https://github.com/hemantkumbhar10"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github link" />
          </a>
      </div>
      <div className={classes.hemantslogo}>
        <img src={hemantslogo} alt="website logo" />
      </div>
      <h6>@Hemant Kumbhar</h6>
      <h6>but you can copy the template, idc!</h6>
    </div>
  );
};

export default Contact;
