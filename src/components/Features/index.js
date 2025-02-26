import React from "react";
import { FaBinoculars, FaCampground, FaSafari, FaTree } from "react-icons/fa";
import "./index.css";

const Features = () => {
  const features = [
    { icon: <FaSafari />, title: "Guided Safari", description: "Explore the Maasai Mara with expert guides and spot the Big Five up close." },
    { icon: <FaBinoculars />, title: "Wildlife Spotting", description: "Witness the Great Migration, majestic lions, and rare bird species." },
    { icon: <FaCampground />, title: "Luxury Camping", description: "Stay in high-end safari lodges with breathtaking views of the savannah." },
    { icon: <FaTree />, title: "Cultural Experience", description: "Engage with Maasai tribes and learn about their unique traditions." },
  ];

  return (
    <section id = "features" className="features">
      <h2>Why Choose This Tour?</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
