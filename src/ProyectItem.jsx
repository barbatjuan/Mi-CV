import React from "react";

const ProjectItem = ({ title, description, link }) => {
  return (
    <div className="bg-[#1e2a47] p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-2xl font-semibold text-[#37ffe1]">{title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#37ffe1] hover:underline mt-4 inline-block"
        >
          Ver Proyecto
        </a>
      )}
    </div>
  );
};

export default ProjectItem;
