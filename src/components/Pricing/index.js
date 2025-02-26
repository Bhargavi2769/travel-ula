import React, { useState } from "react";
import BookingForm from "../BookingForm";
import "./index.css";

const Pricing = ({ title, costDescription, ageGroupCost, onViewItinerary }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleBookNow = () => {
    const adultPrice = ageGroupCost.find(cost => cost.ageGroup === "18+ yrs").cost.replace("USD ", "");
    const childPrice = ageGroupCost.find(cost => cost.ageGroup === "12-17 yrs").cost.replace("USD ", "");
    
    setSelectedPackage({ title, adultPrice: Number(adultPrice), childPrice: Number(childPrice) });
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedPackage(null);
  };

  return (
    <section id="packages" className="pricing-card">
      <h3>{title}</h3>
      <p>{costDescription}</p>
      {ageGroupCost.map((cost, index) => (
        <p key={index}>
          Cost per person {cost.ageGroup} - {cost.cost}
        </p>
      ))}
      <div className="pricing-buttons">
        <button onClick={onViewItinerary}>View Itinerary</button>
        <button className="book-now" onClick={handleBookNow}>Book Now</button>
      </div>
      {isBookingOpen && <BookingForm selectedPackage={selectedPackage} onClose={handleCloseBooking} />}
    </section>
  );
};

export default Pricing;