import React, { useEffect, useState } from "react";
import "./CertificateJS.css"; // Importa el archivo CSS

const CertificateCard = () => {
  const [message, setMessage] = useState("");

  // Ruta de la imagen del certificado
  const certificateUrl =
    "https://pub.coderhouse.com/legacy-certificates/66f69cb24adcbaf2695292a0?lang=es";

  // Usamos useEffect para simular una acción cuando el componente se monta
  // Solo se ejecuta una vez cuando el componente se monta

  return (
    <a href={certificateUrl} target="_blank" rel="noopener noreferrer">
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
              <span className="s2">&lt;#JavaScript&gt;</span>
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
              <span className="s4">div</span>{" "}
              <span className="s5">&lt;&lt;</span>{" "}
              <span className="s1">
                " Felicidades por completar JavaScript en Coderhouse!"
              </span>
              <span className="s5">&lt;&lt;</span> <span className="sc">;</span>
              {"\n"}
              {"  "}
              <span className="s6">return</span> 1<span className="sc">;</span>
              {"\n"}
            </code>
          </pre>
        </div>

        {/* Mensaje de logro */}
        <div className="logro-message">
          <h3>{message}</h3>
        </div>

        {/* Botón para ver el certificado */}
        <div className="s3">
          console.
          <span className="s2">{"log"}</span>
          <span className="s1">{"(Ver Certificado)"}</span>{" "}
        </div>
      </div>
    </a>
  );
};

export default CertificateCard;
