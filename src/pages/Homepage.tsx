// import Timer from "../ui/Timer";
import classes from './styles/Homepage.module.css';
import './styles/aboutnav.css';


//svgs
import arrowsvg from '../assets/svgs/arrow_straight.svg';
import deetssvg from '../assets/svgs/deets.svg';
import drinkssvg from '../assets/svgs/drinks.svg';



const Homepage = () => {

  const viewPage = ()=>{
    const page = document.querySelector('.aboutdiv');
    page?.scrollIntoView({behavior: "smooth"});
  }


  return (
    <div className={classes.homepage}>
        <h1>HEMANT KUMBHAR</h1>
        <div className={classes.intro}>
          <p>
        Yeipp! That's me! A MERN stack developer who likes to code and build cool
        websites. Catch me anytime; I'll be either building something or having
        espresso, or both.<br/>Stay put! We'll talk more.</p>
        <button onClick={()=>viewPage()}>Let's go!</button>
      </div>
      <figure className={classes.figurearrow}>
        <img src={arrowsvg} alt="arrow sticker" />
      </figure>
      <figure className={classes.figuredeets}>
        <img src={deetssvg} alt="arrow sticker" />
      </figure>
      <figure className={classes.drinks}>
        <img src={drinkssvg} alt="arrow sticker" />
      </figure>
      {/* <Timer/> */}
    </div>
  );
};

export default Homepage;
