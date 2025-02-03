import React, { useEffect, useState } from "react";
import "./CertificateHTML.css"; // Importa el archivo CSS

const CertificateHTML = () => {
  const [message, setMessage] = useState("");

  // Ruta corregida de la imagen del certificado (debe estar en /public)
  const certificateUrl2 = "/src/desarrollo-web.jpg";

  return (
    <div className="card">
      <div className="titlebar">
        <span className="buttons">
          <button className="minimize">
            <svg x="0px" y="0px" viewBox="0 0 10.2 1">
              <rect x={0} y="50%" width="10.2" height={1} />
            </svg>
          </button>
          <button className="maximize">
            <svg viewBox="0 0 10 10">
              <path d="M0,0v10h10V0H0z M9,9H1V1h8V9z" />
            </svg>
          </button>
          <button className="close">
            <svg viewBox="0 0 10 10">
              <polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1" />
            </svg>
          </button>
        </span>
      </div>

      <div className="cppcode">
        <pre id="pre">
          <code>
            <span className="s1">Certificate</span>{" "}
            <span className="s2">&lt;#Maquetador Web&gt;</span>
            {"\n"}
            {"\n"}using<span className="s3"> namespace </span>Coder_House
            <span className="sc">;</span>
            {"\n"}
            {"\n"}
            <span className="s3">int</span> <span className="s2">main()</span>{" "}
            <span className="curlies">{"{"}</span>
            {"\n"}
            {"  "}
            <span className="s3">int</span> <span className="s4">alumno</span>{" "}
            <span className="operator">=</span>{" "}
            <span className="sc">Juan Barbat;</span>
            {"\n"}
            {"  "}
            <span className="s4">div</span> <span className="s5">&lt;&lt;</span>{" "}
            <span className="s1">
              " Felicidades por completar Maquetador Web en Coderhouse!"
            </span>
            <span className="s5">&lt;&lt;</span> <span className="sc">;</span>
            {"\n"}
            {"  "}
            <span className="s6">return</span> 1<span className="sc">;</span>
            {"\n"}
          </code>
        </pre>
      </div>

      {/* Botón para ver el certificado */}
      <div className="s3">
        <a href={certificateUrl2} target="_blank" rel="noopener noreferrer">
          console.
          <span className="s2">{"log"}</span>
          <span className="s1">{"(Ver Certificado)"}</span>{" "}
        </a>
      </div>
    </div>
  );
};

export default CertificateHTML;
