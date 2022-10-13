import { useRef } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { motion} from "framer-motion";

import classes from "./styles/Skills.module.css";



const Skills = () => {
  const constraintsRef = useRef(null);
  const [allSkills, setAllSkills] = useState<[string]>(['']);



  var colors = ['#fcba28', '#f38ba3', '#0ba95b', '#7b5ea7', '#f9f4da', '#12b5e5', '#fc7428', '#ed203d'];



  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_PORT}/stackskills`);
        if (!data) {
          setAllSkills(['../../assets/skillicons/figma.png']);
        }
        setAllSkills(data[0].imgs)
      } catch (err) {
        setAllSkills(['../../assets/skillicons/figma.png']);
      }
    })();
  }, []);


  return (
    <motion.div className={classes.skills} ref={constraintsRef}>
        <h3>Tech Stack</h3>
        <div className={classes.container}>
          {allSkills.map((img, index)=>{
            return <motion.div
            className={classes.skill}
            style={{backgroundColor:colors[Math.floor(Math.random() * colors.length)]}}
            drag
            dragConstraints={constraintsRef}
            key= {index}
          >
            <img src={img} alt="hemant kumbhars tech skill"/>
          </motion.div>
          })}
      
      </div>
    </motion.div>
  );
};

export default Skills;
