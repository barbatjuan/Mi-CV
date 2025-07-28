import React, { useState } from "react";
import MinimizableCertificate from "./MinimizableCertificate";
import "./CertificateFullStack.css"; // Importa el archivo CSS

const CertificateFullStack = () => {
  const [message, setMessage] = useState("");

  // Ruta del certificado Full Stack Developer - actualizar con la URL real
  const certificateUrl =
    "https://pub.coderhouse.com/legacy-certificates/6859505b0fc0b90e1bc53ec8?lang=es";

  return (
    <MinimizableCertificate 
      certificateUrl={certificateUrl}
      title="Full Stack Developer Certificate"
      className="certificate-fullstack"
      defaultMinimized={false}
    >

        <div className="cppcode">
          <pre id="pre">
            <code>
              <span className="s1">Certificate</span>{" "}
              <span className="s2">&lt;#Full Stack Developer&gt;</span>
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
                " Felicidades por completar Full Stack Developer en Coderhouse!"
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
    </MinimizableCertificate>
  );
};

export default CertificateFullStack;
