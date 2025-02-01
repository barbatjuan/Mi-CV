import React from "react";
import "./ExperienceItem.css";

const ExperienceItem = ({ title, company, dateRange, description, skills }) => {
  return (
    <div className="mb-8 p-4 rounded-lg transition duration-300 ease-in-out hover:shadow-lg ExpContainer">
      <h3 className="text-xl font-semibold text-gray-300 h3Experience">
        {title}
      </h3>
      <h4 className="text-lg font-medium text-gray-500">{company}</h4>
      <p className="text-sm text-gray-400">{dateRange}</p>
      <p className="text-xs sm:text-sm md:text-base text-gray-300 mt-4 font-light">
        {description}
      </p>

      {/* Botones de habilidades */}
      {skills && skills.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white text-[10px] sm:text-xs px-3 py-1 rounded-full skillsBtn"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceItem;
