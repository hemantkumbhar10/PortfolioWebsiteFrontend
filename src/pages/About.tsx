import Experience from '../components/about/Experience';
import Introduction from '../components/about/Introduction';
import Skills from '../components/about/Skills';
import classes from './styles/About.module.css';
import './styles/aboutnav.css';

interface introType{
    isIntroLoaded: ()=>void
}

const About = (props:introType)=>{
    return(
        <div className={`aboutdiv ${classes.about}`} >
            <h2>ABOUT ME</h2>
            <Introduction isIntroLoaded={props.isIntroLoaded}/>
            <Skills/>
            <Experience/>
        </div>
    )
};

export default About;