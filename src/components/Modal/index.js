import React from "react";
import "./index.css";

const Modal = ({ packageData, commonDetails, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✖</button>
        <h2>{packageData.title}</h2>
        <p><strong>{packageData.costDescription}</strong></p>
        <p><strong>Price:</strong></p>
        {packageData.ageGroupCost.map((cost, index) => (
          <p key={index}>{cost.ageGroup} - {cost.cost}</p>
        ))}
        <p><strong>Overview:</strong> {commonDetails.overview}</p>
        <p><strong>Inclusions:</strong> {commonDetails.inclusions}</p>
        <p><strong>Exclusions:</strong> {commonDetails.exclusions}</p>
        <p><strong>Payment & Cancellation Terms:</strong> {commonDetails.paymentCancellation}</p>
      </div>
    </div>
  );
};

export default Modal;
