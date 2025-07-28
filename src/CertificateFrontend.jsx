import React from "react";
import MinimizableCertificate from "./MinimizableCertificate";
import "./CertificateFrontend.css"; // Importa el archivo CSS

const CertificateFrontend = () => {
  // Ruta de la imagen del certificado
  const certificateUrl =
    "https://pub.coderhouse.com/legacy-certificates/6753e21972eb5a26ec53c96f?lang=es";

  return (
    <MinimizableCertificate
      certificateUrl={certificateUrl}
      title="Frontend"
      defaultMinimized={true}
      className="certificate-frontend"
    >
      <div className="card">
        <div className="cppcode">
          <pre id="pre">
            <code>
              <span className="s1">Certificate</span>{" "}
              <span className="s2">&lt;#FrontEnd&gt;</span>
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
                " Felicidades por completar FrontEnd en Coderhouse!"
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
          console.
          <span className="s2">{"log"}</span>
          <span className="s1">{"(Ver Certificado)"}</span>{" "}
        </div>
      </div>
    </MinimizableCertificate>
  );
};

export default CertificateFrontend;
