import Experience from '../components/about/Experience';
import Introduction from '../components/about/Introduction';
import Skills from '../components/about/Skills';
import classes from './styles/About.module.css';
import './styles/aboutnav.css';




const About = ()=>{
    return(
        <div className={`aboutdiv ${classes.about}`} >
            <h2>ABOUT ME</h2>
            <Introduction />
            <Skills/>
            <Experience/>
        </div>
    )
};

export default About;