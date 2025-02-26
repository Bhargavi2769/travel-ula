import React, { useState } from "react";
import "./index.css";

const BookingForm = ({ selectedPackage, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    adults: 1,
    children: 0,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "adults" || name === "children" ? parseInt(value) : value,
    }));
  };

  const calculateTotalPrice = () => {
    const { adults, children } = formData;
    return adults * selectedPackage.adultPrice + children * selectedPackage.childPrice;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, travelDate } = formData;

    if (!name || !email || !phone || !travelDate) {
      setError("All fields are required.");
      return;
    }

    setError("");
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="booking-form-overlay" onClick={onClose}></div>
      <div className="booking-form-container">
        <h2>Book Your Tour - {selectedPackage.title}</h2>
        {isSubmitted ? (
          <div className="success-message">
            <h3>Booking Successful!</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Travel Date:</strong> {formData.travelDate}</p>
            <p><strong>Adults:</strong> {formData.adults}</p>
            <p><strong>Children:</strong> {formData.children}</p>
            <p><strong>Total Price:</strong> USD {calculateTotalPrice()}</p>
            <button className="submit-btn" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && <p className="error-message">{error}</p>}
            
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />

            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />

            <label>Phone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />

            <label>Travel Date</label>
            <input type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} />

            <label>Number of Adults</label>
            <input type="number" name="adults" value={formData.adults} min="1" onChange={handleChange} />

            <label>Number of Children</label>
            <input type="number" name="children" value={formData.children} min="0" onChange={handleChange} />

            <p className="total-price">Total Price: USD {calculateTotalPrice()}</p>

            <div className="booking-form-buttons">
              <button type="submit" className="submit-btn">Confirm Booking</button>
              <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default BookingForm;
