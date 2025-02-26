import React, { useState } from "react";
import "./index.css";

const itineraryData = [
  {
    day: "Day 1 - Nov 14th 2023",
    details:
      'Arrive at JKIA airport at 7AM for pickup. Travel by 4x4 Landcruiser to Maasai Mara, passing through Nairobi National Park. You may spot wildlife like rhinos and giraffes. Continue to the Great Rift Valley, a stunning natural marvel with lakes and wildlife-rich escarpments. Reach Maasai Mara by noon, check in, and enjoy lunch. In the afternoon, embark on your first game drive across the Talek and Topi plains, spotting antelopes, zebras, and the ‘Topi Pride’ of lions. Return to camp by 6PM, gather around the campfire with your group, share experiences, and have dinner before retiring for the night.',
  },
  
  {
    day: "Day 2 - Nov 15th 2023",
    details:
      "Wake up early, enjoy a hot drink, and wear a fleece jacket for the chilly morning game drive. After a packed breakfast, witness the beautiful sunrise at Maasai Mara. Enjoy a bush breakfast with animals grazing nearby. Continue your game drive, keeping an eye out for cheetahs and newborn Topis. Return to camp by 11:30AM for a rest, followed by lunch at 12:30PM. In the afternoon, head out on a game drive to locate a leopard. Capture moments with your camera before returning to camp for a campfire and dinner. Rest early for a full day of adventure tomorrow.",
  },
  {
    day: "Day 3 - Nov 16th 2023",
    details:
      "Early start for a full-day game drive toward Maasai Mara’s border with Tanzania at Sand River, a key migration route for animals. Enjoy packed breakfast and lunch while exploring the area. Witness the separation of Maasai Mara and Tanzania by the river, and keep an eye out for wildlife, including lions. The day is packed with opportunities to spot the Big 4, with rhinos being elusive. Return to camp with great memories, gather around the campfire, and have dinner",
  },
  {
    day: "Day 4 - Nov 17th 2023",
    details:
      "Wake up leisurely, enjoy a hearty breakfast, and share experiences with your group. Board the Landcruisers for the journey back to Nairobi, where you’ll be dropped off at JKIA airport. End of services.",
  },
];

const Itinerary = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === itineraryData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itineraryData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="itinerary" className="itinerary-section">
      <h2 className="itinerary-title">Itinerary</h2>
      <div className="itinerary-container">
        <button className="prev-button" onClick={prevCard}>Prev</button>
        <div className="itinerary-card">
          <h3 className="itinerary-day">{itineraryData[currentIndex].day}</h3>
          <p className="itinerary-details">{itineraryData[currentIndex].details}</p>
        </div>
        <button className="next-button" onClick={nextCard}>Next</button>
      </div>
    </section>
  );
};

export default Itinerary;
