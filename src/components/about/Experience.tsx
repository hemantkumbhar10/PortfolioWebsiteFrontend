import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./styles/Experience.module.css";

interface Exptype {
  company: string;
  designation: string;
  duration: string;
  description: [string]
}

const Experience = () => {
  const [allExperience, setAllExperience] = useState<Exptype[]>([]);

  const [showmore, setShowMore] = useState<boolean>(false);

  const showless = [allExperience[0]];



  const showmoreHandler =() =>{
    setShowMore(!showmore);
  }


  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<Exptype[]>(
          `${process.env.REACT_APP_BACKEND_PORT}/experiences`
        );
        if (!data) {
          setAllExperience([
            {
              company: "Wipro",
              designation: "Intern (MERN Stack Developer)",
              duration: "Apr 2022 - August 2022",
              description: ['']
            },
          ]);
        }
        setAllExperience(data);
      } catch (err) {
        setAllExperience([
          {
            company: "Wipro",
            designation: "Intern (MERN Stack Developer)",
            duration: "Apr 2022 - August 2022",
            description: ['']
          },
        ]);
      }
    })();
  }, []);


  const exArryaData = !showmore ? showless : allExperience;

  return (
    <div className={`experiencediv ${classes.experience}`}>
      <h3>Experience</h3>
      <>
        {exArryaData.map((experience, index) => (
            <div className={classes.company} key={index}>
              <h4>{experience?.company}</h4>
              <h6>{experience?.designation}</h6>
              <h6>{experience?.duration}</h6>

              <ul>
              {experience?.description?.map((desc, index) => (
                <li key={index}>
                  {desc}
                </li>
              ))}
              </ul>
            </div>
        ))}
      </>
      <button className={classes.showMoreExButton} onClick={showmoreHandler} disabled = {allExperience.length === 1 ? true : false}>{showmore ? 'Show less' : 'Show More'}</button>
    </div>
  );
};

export default Experience;
