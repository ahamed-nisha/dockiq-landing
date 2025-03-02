import { useState, useEffect, useRef } from "react";
import "./Hero.css";
import whaleImage from "../assets/whale.png";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [bubbles, setBubbles] = useState([]);
  const whaleRef = useRef(null);
  const bubbleInterval = useRef(null);

  // Handle mouse movement to make the whale follow cursor slightly
  const handleMouseMove = (e) => {
    if (!whaleRef.current) return;

    const rect = whaleRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 15 - 7.5;
    const y = ((e.clientY - rect.top) / rect.height) * 15 - 7.5;

    setPosition({ x, y });
  };

  // Create a new bubble
  const createBubble = () => {
    if (!isHovered) return;

    const newBubble = {
      id: Date.now(),
      x: Math.random() * 80 + 10, // Random position
      size: Math.random() * 10 + 5, // Random size
      speed: Math.random() * 2 + 1, // Random speed
    };

    setBubbles((prev) => [...prev, newBubble]);

    // Remove bubble after animation completes
    setTimeout(() => {
      setBubbles((prev) => prev.filter((bubble) => bubble.id !== newBubble.id));
    }, 3000);
  };

  // Start/stop bubble animation on hover
  useEffect(() => {
    if (isHovered) {
      bubbleInterval.current = setInterval(createBubble, 300);
    } else {
      if (bubbleInterval.current) {
        clearInterval(bubbleInterval.current);
      }
    }

    return () => {
      if (bubbleInterval.current) {
        clearInterval(bubbleInterval.current);
      }
    };
  }, [isHovered]);

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
            Extension
          </a>
          .
        </p>
      </div>
      <div className="hero-image">
        <div
          className="whale-container"
          ref={whaleRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
        >
          <img
            src={whaleImage}
            alt="Whale in clouds"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${
                isHovered ? 1.05 : 1
              })`,
              transition: "transform 0.3s ease-out",
            }}
          />

          {/* Render bubbles */}
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              className="bubble"
              style={{
                left: `${bubble.x}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                animation: `float ${3 / bubble.speed}s ease-in forwards`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
