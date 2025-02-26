import "./index.css";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import Testimonials from "../../components/Testimonials";
import Itinerary from "../../components/Itinerary";
import Features from "../../components/Features";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import Pricing from "../../components/Pricing";
import TermsAndConditions from "../../components/TermsAndConditions";
import { useState } from "react";
import Modal from "../../components/Modal";

const Home = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const pricingData = [
    {
      title: "Magical Kenya",
      costDescription: "For 5N/6D",
      ageGroupCost: [
        { ageGroup: "12-17 yrs", cost: "USD 1842" },
        { ageGroup: "18+ yrs", cost: "USD 1967" }
      ]
    },
    {
      title: "Premium Safari",
      costDescription: "For 6N/7D",
      ageGroupCost: [
        { ageGroup: "12-17 yrs", cost: "USD 2000" },
        { ageGroup: "18+ yrs", cost: "USD 2200" }
      ]
    },
    {
      title: "Budget Safari",
      costDescription: "For 4N/5D",
      ageGroupCost: [
        { ageGroup: "12-17 yrs", cost: "USD 1400" },
        { ageGroup: "18+ yrs", cost: "USD 1500" }
      ]
    },
    {
      title: "Family Safari",
      costDescription: "For 7N/8D",
      ageGroupCost: [
        { ageGroup: "12-17 yrs", cost: "USD 1600" },
        { ageGroup: "18+ yrs", cost: "USD 1800" }
      ]
    }
  ];

  const commonDetails = {
    overview: "Experience the best of Maasai Mara with our exclusive packages. Enjoy game drives, comfortable stays, and expert-guided tours.",
    termsConditions: "- Costs are based at 4 paxs per vehicle for game drives and 5 per vehicle for Internal transfers\n- Stay at Mara would be at Zebra plains or Loyk camp or Julia river camp.\n- Last day to confirm the tour is August 14th 2023.\n- Guests travelling should process valid passports with a minimum of 6 months validity from the date of return.",
    inclusions: "- Internal transfers from JKIA airport to Maasai Mara and back by Landcruiser on shared basis\n- Stay on twin sharing basis at Maasai Mara either at Zebra plains or Loyk camp.\n- Game drives in Landcruisers on a shared basis.\n- Water during game drives.\n- All meals as mentioned in the itinerary.",
    exclusions: "- Any airfare or VISA charges\n- Personal and medical expenses during the tour\n- Tips and gratitude\n- Anything other than mentioned in the Inclusions section.",
    paymentCancellation: "- 100% of the tour cost at the time of booking\n- 50% of the tour cost would be given back as credit if the tour is cancelled 60 days before the travel dates\n- No refund is provided if the tour is cancelled within thirty days of the travel dates."
  };

  const handleViewItinerary = (packageData) => {
    setSelectedPackage(packageData);
  };

  const handleCloseModal = () => {
    setSelectedPackage(null);
  };

  return (
    <div className="home-container">
      <Header />
      <HeroSection />
      <Itinerary />
      <Features />
      <div className="pricing-container">
        <h1 className="heading">Package Details</h1>
        <div className="pricing-cards-container">
          {pricingData.map((packageData, index) => (
            <Pricing
              key={index}
              title={packageData.title}
              costDescription={packageData.costDescription}
              ageGroupCost={packageData.ageGroupCost}
              overview={commonDetails.overview}
              onViewItinerary={() => handleViewItinerary(packageData)}
            />
          ))}
        </div>
      </div>
      <TermsAndConditions />
      <Testimonials />
      <CTA />
      <Footer />
      {selectedPackage && (
        <Modal packageData={selectedPackage} commonDetails={commonDetails} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Home;
