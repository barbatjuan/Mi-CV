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
      className="text-white flex justify-center items-start bg-[#0a192f] relative"
      style={{ width: "70%", paddingTop: "70px", margin: "0 auto" }}
    >
      <div className="flex w-full justify-between">
        {/* Columna de la izquierda */}
        <div className="flex flex-col justify-start w-1/2 pl-10">
          <h1 className="text-6xl font-bold mb-4 text-gray-200">
            Juan I. Barbat
          </h1>
          <h2 className="text-2xl font-medium text-gray-400">
            Frontend Developer | Web Designer
          </h2>
          <p
            className="text-[16px] max-w-lg text-left text-gray-300 mt-4 font-light"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "200" }}
          >
            Me gusta crear experiencias web modernas, accesibles y optimizadas
            para el rendimiento. Me gusta diseñar soluciones visuales que
            combinan funcionalidad con estética, siempre con un enfoque en la
            accesibilidad y el detalle.
          </p>

          {/* Custom Button with margin */}
          <div className="mt-6">
            <CustomButton />
          </div>
        </div>

        {/* Columna de la derecha */}
        <div className="flex flex-col justify-start w-1/2 pl-10">
          <p
            className="text-[14px] text-gray-300 mt-4 font-light"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "200" }}
          >
            Actualmente soy CEO y Diseñador en Web Coders. io, donde lidero el
            diseño y desarrollo de soluciones web, trabajando estrechamente con
            nuestros clientes para entregar productos que superen sus
            expectativas.
          </p>
          <p className="text-[14px] text-gray-300 mt-4 font-semibold">
            Me apasiona crear soluciones accesibles y visualmente atractivas.
            Además, tengo un recorrido como QA tester, lo que me ha permitido
            perfeccionar mi enfoque en la calidad y el rendimiento de las
            aplicaciones.
          </p>
          <p
            className="text-[14px] text-gray-300 mt-4 font-light"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "200" }}
          >
            He trabajado con herramientas de diseño como Photoshop, Illustrator
            y Premiere, y en los últimos años me he enfocado en gestionar redes
            sociales para clientes, siempre buscando la manera de mejorar la
            presencia digital de las marcas.
          </p>
          <p
            className="text-[14px] text-gray-300 mt-4 font-light"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "200" }}
          >
            En mi tiempo libre, me encanta estar con mi familia, descubrir
            nuevos lugares viajando, leer algo interesante o simplemente
            disfrutar de un buen día de playa.
          </p>
        </div>
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
