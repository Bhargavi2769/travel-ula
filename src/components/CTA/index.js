import React from "react";
import "./index.css";

const CTA = () => {
  const handleClick = () => {
    window.open("https://wa.me/1234567890?text=I'm%20interested%20in%20the%20Maasai%20Mara%20tour!", "_blank");
  };

  return (
    <section id="cta" className="cta">
      <div className="cta-content">
        <h2>Ready for an Unforgettable Adventure?</h2>
        <p>Experience the thrill of the Maasai Mara like never before. Limited slots available!</p>
        <button className="cta-button" onClick={handleClick}>Inquire via WhatsApp</button>
      </div>
    </section>
  );
};


export default CTA;
