import logo from './LETSGO_EB Edits Transparent Background.svg';
import darkpic from './dark.png';
import lightpic from './light.png';
import './App.css';
import { useRef } from 'react';
import Privacy from './Privacy';

function App() {

  const homeRef = useRef();
  const featureRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const modalRef = useRef();


  return (
    <div className="App" ref={homeRef}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <header className="App-header">
        <div className="main-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="icon">
            <i className="fa fa-bars"></i>
          </div>
        </div>
        <div className="header-right">
          <a onClick={() => homeRef.current.scrollIntoView({ behavior: "smooth" })}>Home</a>
          <a onClick={() => featureRef.current.scrollIntoView({ behavior: "smooth" })}>Features</a>
          <a onClick={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })}>About</a>
          <a onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}>Contact</a>
          <a onClick={() => modalRef.current?.showModal()}>Privacy</a>
        </div>
      </header>
      <div className='App-body'>
        <div className='title-wrapper'>
          <p className='title'>A revolutionary app for social dining, taking the stress and anxiety out of the most important decision of the day - <span>where to eat</span></p>
          <p className='hashtag'>#healinghangry</p>
        </div>
        <div className='preview-wrapper'>
          <img className="preview-img" src={darkpic} />
          <img className="preview-img" src={lightpic} ref={featureRef} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px" }}>
          <p className='subtitle'>
            What is LetsGO?
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "start", margin: "20px" }}>
            <p className='text'>LetsGO was founded by a team of entrepreneurs who had an answer to every question that faced them, except one...</p>
            <div style={{width:"100%",textAlign:"center",color:"white"}}>
            <p className='text' style={{color:"white"}}>Where are we going to go for a team lunch?</p>
            </div>
            <p className='text'>Armed with a team of star developers from UWaterloo, answering this question became an unstoppable mission</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "start", margin: "20px" }}>
            <p className='text'>The decision of choosing where or what to eat is stressful and anxiety provoking. Our app eliminates the difficulty</p>
            <p className='text'>of finding commonalities within a mixed peer group, or individuals of different power dynamics. Your group will be able</p>
            <p className='text'>to discover new restaurants and enhance the social benefits associated with group dining</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "start", margin: "20px" }}>
          <ol className='text'>
  <li> <p>Host or Join a Dining Room</p></li>
  <li><p>Be presented with great restaurants in your city</p></li>
            <li><p>Swipe right to say YES</p></li>
            <li><p>Swipe left to say NO</p></li>
            <li><p>It's a match when everyone swipes right</p></li>
            <li><p>Make sure to add your friends!</p></li>
            </ol>
          </div>
        </div>
        <div ref={aboutRef} style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px" }}>
          <p className='subtitle'>About Us</p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px" }}>
            <p className='text'>We are a young, lean and dynamic with a proven track record of
              success in previous bootstrapped startup e-commerce venture</p>
            <p className='text'>Founder/CEO - Brendan McDermott (Creative Director)</p>
            <p className='text'>Founder/COO - Joshua Jamieson (Operations Director)</p>
            <p className='text'>Founder/CTO - Iram Rahman (Technical Director)</p>
          </div>
        </div>
        <div ref={contactRef} style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px", maxWidth: "250px", textAlign: "center" }}>
          <p className='subtitle'>Contact Us</p>
          <div>
            <i className="fa fa-address-card-o fa-2x" aria-hidden="true" style={{ color: "#65CD2B" }} />
            <p className='text'>19 McEwan Drive West
              Bolton, ON L7E1G2</p>
          </div>
          <a href="tel:+14373285207" style={{ textDecoration: "none" }}>
            <div>
              <i className="fa fa-phone fa-2x" aria-hidden="true" style={{ color: "#65CD2B" }} />
              <p className='text'>(437) 328-5207</p>
            </div>
          </a>
          <a href="mailto:info@letsgoapp.io" style={{ textDecoration: "none" }}>
            <div>
              <i className="fa fa-envelope-o fa-2x" aria-hidden="true" style={{ color: "#65CD2B" }} />
              <p className='text'>info@letsgoapp.io</p>
            </div>
          </a>
          <a href="https://www.instagram.com/lets_go_app/" rel='external' style={{ textDecoration: "none" }}>
            <div>
              <i className="fa fa-instagram fa-2x" aria-hidden="true" style={{ color: "#65CD2B" }} />
              <p className='text'>@lets_go_app</p>
            </div>
          </a>
          <dialog ref={modalRef}>
            <button onClick={() => modalRef.current?.close()}>Close</button>
            <Privacy />
            <button onClick={() => modalRef.current?.close()}>Close</button>
          </dialog>
        </div>
      </div>
    </div>
  );
}

export default App;
