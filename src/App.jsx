import React, { useEffect, useState } from "react";
import "./App.css";
import CustomButton from "./CustomButton";
import ExperienceItem from "./ExperienceItem";
import CertificateJS from "./CertificateJS";
import CertificateReact from "./CertificateReact";
import CertificateHTML from "./CertificateHTML"; // Importa el nuevo certificado HTML
import CertificateFrontend from "./CertificateFrontend";
import { Link } from "react-scroll";
import BtnExperience from "./BtnExperience";
import BtnCertificates from "./BtnCertificates";
import BtnProyects from "./BtnProyects";
import ProfileImage from "./ProfileImage";
import ProjectItem from "./ProjectItem"; // Asegúrate de que la ruta sea la correcta

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState(""); // Estado para el seguimiento de la sección activa

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 50% de la sección debe estar en vista
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Actualiza la sección activa
        }
      });
    }, observerOptions);

    // Observar las secciones
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
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
          <ProfileImage />

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
                <Link
                  to="experience"
                  smooth={true}
                  duration={500}
                  className={activeSection === "experience" ? "active" : ""}
                >
                  <BtnExperience />
                </Link>
              </li>
              <li>
                <Link
                  to="certificates-1"
                  smooth={true}
                  duration={500}
                  className={activeSection === "certificates-1" ? "active" : ""}
                >
                  <BtnCertificates />
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className={activeSection === "projects" ? "active" : ""}
                >
                  <BtnProyects />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Columna de la derecha */}
        <div className="flex flex-col justify-start w-1/2 pl-10 ml-auto">
          <p className="text-[14px] text-gray-300 mt-4 font-light">
            Actualmente soy CEO y Diseñador en Web Coders.io, donde lidero el
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
          <p className="text-[14px] text-gray-300 mt-4 font-light">
            He trabajado con herramientas de diseño como Photoshop, Illustrator
            y Premiere, y en los últimos años me he enfocado en gestionar redes
            sociales para clientes, siempre buscando la manera de mejorar la
            presencia digital de las marcas.
          </p>
          <p className="text-[14px] text-gray-300 mt-4 font-light">
            En mi tiempo libre, me encanta estar con mi familia, descubrir
            nuevos lugares viajando, leer algo interesante o simplemente
            disfrutar de un buen día de playa.
          </p>

          {/* Experience Items */}
          <div
            id="experience"
            className="mt-8 section"
            style={{ paddingTop: "60px" }}
          >
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

          <div id="certificates-1" className="mt-8 section">
            <CertificateHTML />
            <CertificateJS />
            <CertificateReact />
            <CertificateFrontend />
          </div>

          {/* Sección de Proyectos */}
          <div id="projects" className="mt-8 section">
            <ProjectItem
              title="Mi Casa Construcciones"
              description="Empresa de construcción"
              technologies={["HTML", "CSS", "JavaScript"]}
              link="https://www.micasaconstrucciones.uy"
              skills={["HTML", "CSS", "JavaScript"]} // Asegúrate de incluir 'skills' aquí
            />
            <ProjectItem
              title="Emigrar con Ana"
              description="Migration Consulting para Anastasia Leonova - Youtuber"
              technologies={[
                "WordPress",
                "Divi",
                "Yoast SEO",
                "Photoshop",
                "Hosting",
                "Diseño de Logo",
              ]}
              link="https://www.emigrarconana.com"
            />
            <ProjectItem
              title="Web Coders"
              description="Proyecto personal para mi Agencia"
              technologies={[
                "WordPress",
                "Divi",
                "Yoast SEO",
                "Photoshop",
                "Hosting",
                "Illustrator",
                "Redes Sociales",
              ]}
              link="https://www.webcoders.io"
            />
            <ProjectItem
              title="Camila Verdún"
              description="Un sitio web creado en colaboración para Camila Verdún - Youtuber"
              technologies={[
                "WordPress",
                "Divi",
                "Yoast SEO",
                "Photoshop",
                "Hosting",
                "Diseño de Logo",
              ]}
              link="https://www.camilaverdun.com"
            />
            <ProjectItem
              title="Sublimat"
              description="E-Shop sin pasarela de pagos para Mathias de Sublimat"
              technologies={[
                "WordPress",
                "Divi",
                "Yoast SEO",
                "Photoshop",
                "Hosting",
                "WooCommerce",
              ]}
              link="https://www.sublimat.uy"
            />
            <ProjectItem
              title="Casor.io"
              description="Una Web novedosa y muy estilizada para una empresa de creación de tarjetas digitales para Bodas"
              technologies={[
                "WordPress",
                "Divi",
                "Yoast SEO",
                "Photoshop",
                "Hosting",
                "Diseño de Logo",
                "Redes Sociales",
              ]}
              link="https://www.casor.io"
            />
            <ProjectItem
              title="Laguna Garzón"
              description="Un sitio web precioso con excelentes fotografías proporcionadas por Ana Amorin"
              technologies={[
                "WordPress",
                "Divi",
                "Yoast SEO",
                "Photoshop",
                "Hosting",
              ]}
              link="https://www.lagunagarzon.uy"
            />
            <ProjectItem
              title="Raciones Caninas"
              description="E-Commerce para una empresa de importación y distribución de articulos para mascotas"
              technologies={[
                "WordPress",
                "Divi",
                "Yoast SEO",
                "Photoshop",
                "Hosting",
                "Diseño de Logo",
                "WooCommerce",
                "Pasarela de pagos",
                "Redes Sociales",
              ]}
              link="https://www.racionescaninas.com.uy"
            />
            <ProjectItem
              title="Oro Azul"
              description="E-Commerce para una empresa de importación y distribución de Filtros Stéfani"
              technologies={[
                "WordPress",
                "Divi",
                "Photoshop",
                "Hosting",
                "Diseño de Logo",
                "WooCommerce",
                "Pasarela de pagos",
              ]}
              link="https://www.oroazuluy.com"
            />
            <ProjectItem
              title="Depilación MC"
              description="Sitio web para Mariela Carballo, tratamientos de estética y depilación definitiva"
              technologies={[
                "WordPress",
                "Divi",
                "Photoshop",
                "Hosting",
                "Meta Ads",
                "Google Ads",
                "Redes Sociales",
              ]}
              link="https://www.depilacionmc.com"
            />
            <ProjectItem
              title="Rayos del Sol"
              description="Rayos del Sol es un complejo de cabañas con mas de 15 años en La Paloma, Rocha"
              technologies={[
                "WordPress",
                "Divi",
                "Photoshop",
                "Hosting",
                "Meta Ads",
                "Google Ads",
                "Redes Sociales",
              ]}
              link="https://www.rayosdelsol.uy"
            />
            <ProjectItem
              title="E-Raciones"
              description="E-Shop para empresa de importación y distribución de alimentos para mascotas"
              technologies={[
                "Shopify",
                "Photoshop",
                "Hosting",
                "Meta Ads",
                "Google Ads",
                "Redes Sociales",
              ]}
              link="https://www.eraciones.com"
            />
            <ProjectItem
              title="Juano Cocina"
              description="E-Commerce para emprendimiento local de alimentos gourmet"
              technologies={[
                "WordPress",
                "Divi",
                "WooCommerce",
                "Pasarelas de Pago",
                "Photoshop",
                "Hosting",
                "Meta Ads",
                "Google Ads",
                "Redes Sociales",
              ]}
              link="https://www.rayosdelsol.uy"
            />

            {/* Agrega más ProjectItem según sea necesario */}
          </div>
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
