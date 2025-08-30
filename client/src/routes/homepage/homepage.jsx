import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");
  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>Boost AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          Boost AI is a next-generation AI-powered platform designed to
          simplify, accelerate, and enhance the way developers and businesses
          integrate artificial intelligence into their products.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "bot"
                  ? "/bot.png"
                  : typingStatus === "bot"
                  ? "/bot.png"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Smart. Fast. Scalable. That’s Boost AI.",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Boost AI that grows with you.",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "AI that works the way you do.",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Powering the future of intelligence.",
                2000,
                () => {
                  setTypingStatus("bot");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
          <span>|</span>
          <Link to="/">copyright @ 2025</Link>
          <span>|</span>
          <Link to="/">Mrsp.</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
