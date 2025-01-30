import React from "react";
import "./ExperienceItem.css";

const ExperienceItem = ({ title, company, dateRange, description }) => {
  return (
    <div
      className="mb-8 p-4 rounded-lg transition duration-300 ease-in-out hover:shadow-lg ExpContainer" // Usamos un tono más claro
    >
      <h3 className="text-xl font-semibold text-gray-300 h3Experience">
        {title}
      </h3>
      <h4 className="text-lg font-medium text-gray-500">{company}</h4>
      <p className="text-sm text-gray-400">{dateRange}</p>
      <p className="text-base text-gray-300 mt-2">{description}</p>
    </div>
  );
};

export default ExperienceItem;
