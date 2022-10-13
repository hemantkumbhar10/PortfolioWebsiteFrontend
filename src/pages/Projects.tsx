import Project from '../components/projects/Project';
import classes from './styles/Projects.module.css';
import './styles/projectdiv.css';


const Projects = () =>{
    return(
        <div className={`projectdiv ${classes.projects}`}>
            <h2>Some things I've built</h2>
            <div className={classes.projectcards}>
            <Project/>
            </div>
        </div>
    )
};

export default Projects;