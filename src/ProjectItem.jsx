import React from "react";
import "./ProjectItem.css";

const ProjectItem = ({ title, description, technologies, link, skills }) => {
  return (
    <div className="ProjectItem mb-6 p-4 rounded-lg hover:bg-[#5f84ea21]">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#37ffe1] mt-2 block "
      >
        <h3 className="text-xl font-semibold text-gray-200 h3Projects">
          {title}
        </h3>
        <p className="text-gray-300">{description}</p>
        <div className="mt-2">
          <span
            className="text-sm text-gray-500 font-light"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Tecnologías:{" "}
          </span>
          <span
            className="font-light text-xs"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {technologies.join(", ")}
          </span>
        </div>
        Ver proyecto
      </a>

      {/* Botones de habilidades */}
    </div>
  );
};

export default ProjectItem;
