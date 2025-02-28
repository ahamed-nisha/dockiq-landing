// src/components/Hero.jsx
import "./Hero.css";
import typewriterImage from "../assets/whale.png"; // You'll need to add this image to your assets folder

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Real-Time Docker
          <br />
          Monitoring & Visualization.
        </h1>
        <p className="hero-description">
          A Docker monitoring solution that brings real-time intelligence to
          containerized applications.{" "}
          <a
            href="https://hub.docker.com/r/kimalena9/docker-extension"
            target="_blank"
            className="ext-link"
          >
            Extension here
          </a>
          .
        </p>
      </div>
      <div className="hero-image">
        <img src={typewriterImage} alt="Whale in clouds" />
      </div>
    </section>
  );
};

export default Hero;
