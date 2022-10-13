import React, { useState, useEffect } from "react";
import axios from "axios";

import classes from "./styles/Introduction.module.css";

//svgs
import notsure from "../../assets/svgs/notsure.svg";
import idea from "../../assets/svgs/idea.svg";
import peek from "../../assets/svgs/peek.svg";
import killedit from "../../assets/svgs/killedit.svg";
import puregold from "../../assets/svgs/puregold.svg";

const Introduction = () => {
  const [allIntros, setAllIntros] = useState<{
    intro_paragraph: string;
    serious_paragraph: string;
    personal_paragraph: string;
  }>({
    intro_paragraph: "",
    serious_paragraph: "",
    personal_paragraph: "",
  });

  const errorMessage =
    "Error occurred! please report it to me at hemantkumbhar@gmail.com";

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_PORT}/aboutintros`);
        if (!data) {
          setAllIntros({
            intro_paragraph: errorMessage,
            serious_paragraph: errorMessage,
            personal_paragraph: errorMessage,
          });
        }
        setAllIntros({
              intro_paragraph: data[0]?.intro,
              serious_paragraph: data[0]?.technical,
              personal_paragraph: data[0]?.personal,
            })
      } catch (err) {
        setAllIntros({
          intro_paragraph: errorMessage,
          serious_paragraph: errorMessage,
          personal_paragraph: errorMessage,
        });
      }
    })();
  }, []);


  return (
    <div className={classes.introduction}>
      <div className={classes.intro}>
        <h3>So who is this guy?</h3>
        <h3>myth or mega developer?</h3>
        <p className={classes.introP}>{allIntros.intro_paragraph}</p>
        <h3 className={classes.serious}>What am I doing rn?</h3>
        <p className={classes.seriousP}>{allIntros.serious_paragraph}</p>
        <h3 className={classes.personal}>Some facts about me!</h3>
        <p className={classes.personalP}>
          {allIntros.personal_paragraph}
          <br />
          <br />
          Cheers!
        </p>
      </div>
      <img src={notsure} alt="not sure sticker" className={classes.notsure} />
      <img src={idea} alt="idea sticker" className={classes.idea} />
      <img src={peek} alt="take a peek sticker" className={classes.peek} />
      <img
        src={killedit}
        alt="killed it sticker"
        className={classes.killedit}
      />
      <img src={puregold} alt="puregold sticker" className={classes.puregold} />
    </div>
  );
};

export default Introduction;
