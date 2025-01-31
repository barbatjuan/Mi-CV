import React, { useEffect, useState } from "react";
import "./App.css";
import CustomButton from "./CustomButton"; // Importa el CustomButton
import ExperienceItem from "./ExperienceItem"; // Importa el componente ExperienceItem
import CertificateJS from "./CertificateJS"; // Importa el CertificateCard
import { Link } from "react-scroll"; // Usamos react-scroll para smooth scrolling
import BtnExperience from "./BtnExperience"; // Ajusta la ruta según corresponda
import BtnCertificates from "./BtnCertificates";
import BtnProyects from "./BtnProyects";
// import CertificateReact from "./CertificateReact";

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
        {/* Columna de la izquierda fija */}
        <div
          className="flex flex-col justify-start w-1/2 pl-10 fixed top-20"
          style={{ maxWidth: "50%", zIndex: 10 }}
        >
          <h1 className="text-6xl font-bold mb-4 text-gray-200">
            Juan I. Barbat
          </h1>
          <h2
            className="text-2xl font-light"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "200",
              color: "#37ffe1",
            }}
          >
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

          {/* Lista de botones de navegación */}
          <div className="mt-8">
            <ul>
              <li>
                <Link to="experience" smooth={true} duration={500}>
                  <BtnExperience />
                </Link>
              </li>
              <li>
                <Link to="certificates-1" smooth={true} duration={500}>
                  <BtnCertificates />
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500}>
                  <BtnProyects />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Columna de la derecha */}
        <div className="flex flex-col justify-start w-1/2 pl-10 ml-auto">
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

          {/* Experience Items */}
          <div id="experience" className="mt-8">
            <ExperienceItem
              title="Analista Desarrollador Genexus"
              company="KBI Global - ISP Chile"
              dateRange="Jul 2012 - Jul 2013"
              description="Desarrollo de sistema PEC para gestión y control interno del Instituto de Salud Pública de Chile."
              skills={["Genexus", "Gestión de Proyectos"]}
            />
            <ExperienceItem
              title="Web Designer & Social Media Manager"
              company="One Solutions"
              dateRange="Jul 2019 - Dec 2024"
              description="Diseño sitios web responsivos y optimizados, trabajando de manera colaborativa con clientes para crear experiencias únicas. Diseño y creación de banners y campañas publicitarias en Meta Ads y Google Ads."
              skills={[
                "CSS",
                "JavaScript",
                "WordPress",
                "Divi",
                "SEO",
                "Tailwind CSS",
                "Photoshop",
                "Illustrator",
                "Google Ads",
                "Meta Ads",
              ]}
            />
            <ExperienceItem
              title="Frontend Developer & Web Designer"
              company="Web Coders"
              dateRange="Ene 2024 - Presente"
              description="Desarrollo y diseño de interfaces web modernas y accesibles, utilizando WordPress, tecnologías como Javascript, React y Tailwind CSS."
              skills={[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "WordPress",
                "Divi",
                "SEO",
                "Tailwind CSS",
                "Photoshop",
                "Illustrator",
                "Google Ads",
                "Meta Ads",
              ]}
            />
          </div>

          {/* Agregar el CertificateCard debajo de la experiencia */}
          <div id="certificates-1" className="mt-8">
            <CertificateJS />
          </div>
          {/* <div className="mt-8">
            <CertificateReact />
          </div> */}
        </div>
      </div>

      {/* Custom cursor */}
      <div
        className="cursor-light"
        style={{
          position: "fixed", // Cambiado de absolute a fixed
          left: `${cursorPosition.x - 0}px`, // Ajustamos correctamente con el tamaño del cursor
          top: `${cursorPosition.y + 0}px`, // Ajustamos correctamente con el tamaño del cursor
          pointerEvents: "none", // Evita que el cursor interfiera con otros elementos
          zIndex: 10000, // Asegúrate de que el cursor esté por encima de otros elementos
        }}
      ></div>
    </div>
  );
};

export default App;
