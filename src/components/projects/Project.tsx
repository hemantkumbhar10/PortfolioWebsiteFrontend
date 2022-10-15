import React, { useState, useEffect } from "react";
import axios from "axios";

import classes from "./styles/Project.module.css";

//icons
import github from "../../assets/skillicons/github.png";
import link from "../../assets/svgs/link.svg";

interface Projecttypes {
  title: string;
  tags: string;
  address: string;
  github: string;
  img: string;
  description: string;
}

interface isProjectLoadingType{
  isProjectsLoaded:()=>void
}

const Project = ({isProjectsLoaded}:isProjectLoadingType) => {
  const [allProjects, setAllProjects] = useState<Projecttypes[]>([]);

  const [showmoreP, setShowMoreP] = useState<boolean>(false);

  const showlessP = [allProjects[0], allProjects[1]];

  const showmoreHandlerP = () => {
    setShowMoreP(!showmoreP);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<Projecttypes[]>(
          `${process.env.REACT_APP_BACKEND_PORT}/projects`
        );
        if (!data) {
          setAllProjects([
            {
              title: "Find The Recipe",
              tags: "#ReactJS #SearchEngine #CSS #HTML5 #api",
              address: "https://finndtherecipe.netlify.app/",
              github:
                "https://github.com/hemantkumbhar10/Web-Dev/tree/main/Find%20the%20recipe",
              img: "https://res.cloudinary.com/hemantkumbhar/image/upload/v1664932795/cyberPortfolio/websites/findtherecipe_prz2l2.png",
              description:
                "The React app which helps you find different cooking incredients. Uses Edamam API to fetch the data and extracts.",
            },
          ]);
        }else{
        setAllProjects(data);
        isProjectsLoaded()
      }
      } catch (err) {
        setAllProjects([
          {
            title: "Find The Recipe",
            tags: "#ReactJS #SearchEngine #CSS #HTML5 #api",
            address: "https://finndtherecipe.netlify.app/",
            github:
              "https://github.com/hemantkumbhar10/Web-Dev/tree/main/Find%20the%20recipe",
            img: "https://res.cloudinary.com/hemantkumbhar/image/upload/v1664932795/cyberPortfolio/websites/findtherecipe_prz2l2.png",
            description:
              "The React app which helps you find different cooking incredients. Uses Edamam API to fetch the data and extracts.",
          },
        ]);
      }
    })();
  }, [isProjectsLoaded]);


  const projectsArryaData = !showmoreP ? showlessP : allProjects;


  return (
    <>
    {projectsArryaData.map((project, index) => {
      return (
    <div className={classes.project} key={index}>
        <div className={classes.projectimg}>
        <a href={project?.address} target='_blank' rel="noreferrer">
          <img src={project?.img} alt="website" />
          <div className={classes.overlay}></div>
        </a>
      </div>
      
      <div className={classes.projectdescription}>
        <div className={classes.projecthero}>
          <h6>Featured Project</h6>
          <h4>{project?.title}</h4>
        </div>
        <div className={classes.projectP}>
          <p>
            {project?.description}
          </p>
        </div>
        <div className={classes.tags}>
          <h6>{project?.tags}</h6>
        </div>
        <div className={classes.projectlinks}>
          <a
            href={project?.github}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              alt="github link"
              className={classes.githublink}
            />
          </a>
          <a
            href={project?.address}
            target="_blank"
            rel="noreferrer"
          >
            <img src={link} alt="website link" className={classes.link} />
          </a>
        </div>
      </div>
    </div>
    )})
    
}
<button className={classes.showMorePrButton} onClick={showmoreHandlerP}>{showmoreP ? 'Show less' : 'Show More'}</button>
</>)
};

export default Project;
