import React, { useEffect, useState } from "react";
import "./App.css";
import CustomButton from "./CustomButton"; // Importa el CustomButton

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="text-white flex flex-col items-start justify-center bg-[#0a192f] relative"
      style={{ width: "60%", paddingLeft: "500px", paddingTop: "70px" }} // Ancho al 60%
    >
      <h1 className="text-6xl font-bold mb-4 text-gray-200">Juan Barbat</h1>
      <h2 className="text-2xl text-gray-400">
        Frontend Developer | Web Designer
      </h2>
      <p className="text-lg max-w-lg text-left text-gray-300 mt-4">
        Creo experiencias web modernas, accesibles y optimizadas para el
        rendimiento. Apasionado por diseñar soluciones visuales que combinen
        funcionalidad y estética.
      </p>

      {/* Custom Button with margin */}
      <div className="mt-6">
        {" "}
        {/* Añadimos margen superior aquí */}
        <CustomButton />
      </div>

      {/* Custom cursor */}
      <div
        className="cursor-light"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      ></div>
    </div>
  );
};

export default App;
