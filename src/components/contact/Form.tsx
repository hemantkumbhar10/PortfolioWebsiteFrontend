import { useRef } from "react";
import emailjs from '@emailjs/browser';


import classes from './styles/Form.module.css';


const Form = () =>{

    const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) {
      return;
    } else {
      emailjs
        .sendForm(
          "service_u0y7fmt",
          "template_8r9r4f7",
          form.current,
          "9pp88lT5ld8W63BW9"
        )
        .then((result)=>{
            console.log(result.text);
        },
        (error)=>{
            console.log(error.text);
        });
        form.current.reset();
    };
  };




    return (
        <form className={classes.form} ref={form} onSubmit={sendEmail}>
          <h3>Hiii theree! If you have any suggestions, questions, want to work with me or any other reason, ping me here. I'll try my best to get back to you! <br /> Have a good day!</h3>
          <div className={classes.reasondiv}>
            <label htmlFor="reason" className={classes.reasonlabel}>
              I'm contacting you because
            </label>
            <select
              name="reason"
              id={classes.reasonselect}
              className={classes.reasonselect}
              aria-required="true"
              aria-invalid="false"
            >
              <option value="I liked your website">
              I liked your website
              </option>
              <option value="I'd like to work with you" >
                I would like to work with you
              </option>
              <option value="I have work opportunity for you">
                I have work opportunity for you
              </option>
              <option value="nothing! just chillin here">
                nothing! just chillin here
              </option>
              <option value="Tell me how you got this far">
                Tell me how you got this far
              </option>
              <option value="Could you help me for a second?">
                Could you help me for a second?
              </option>
              <option value="Lionel Messi sent me">Lionel Messi sent me</option>
            </select>
          </div>
          <div className={classes.emaildiv}>
            <label htmlFor="email" className={classes.emaillabel}>
              You can reply me at
            </label>
            <input
              type="email"
              name="email"
              className={classes.emailInput}
              placeholder="Your email"
              aria-required="true"
              aria-invalid="false"
              required
            />
          </div>
          <div className={classes.namediv}>
            <label htmlFor="name" className={classes.namelabel}>
              My name is
            </label>
            <input
              type="text"
              name="name"
              className={classes.nameInput}
              placeholder="Your name"
              aria-required="true"
              aria-invalid="false"
              required
            />
          </div>
          <div className={classes.messagediv}>
            <label htmlFor="message" className={classes.messagelabel}>
              What I really wanted to say is
            </label>
            <textarea
              name="message"
              className={classes.messageInput}
              placeholder="Your message"
              aria-required="true"
              aria-invalid="false"
              required
            />
          </div>
          <div className={classes.reasondiv}>
            <label htmlFor="thanks" className={classes.reasonlabel}>
              Thanks!
            </label>
            <select
              name="thanks"
              id={classes.reasonselect}
              className={classes.reasonselect}
              aria-required="true"
              aria-invalid="false"
              defaultValue= 'High five'
            >
              <option value="High five" >
              High five
              </option>
              <option value="Wink">
                Wink
              </option>
              <option value="XOXO">
                XOXO
              </option>
              <option value="Love">
                Love
              </option>
              <option value="Truly yours">Truly yours</option>
            </select>
          </div>
          <button>Send Pigeon</button>
        </form>
      );
};


export default Form;