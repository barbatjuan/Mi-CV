import React, { useState } from "react";
import MinimizableCertificate from "./MinimizableCertificate";
import "./CertificateBackII.css";

const CertificateBackII = () => {
  const [message, setMessage] = useState("");

  const certificateUrl =
    "https://pub.coderhouse.com/legacy-certificates/68254687395778cf5f777d67?lang=es";

  return (
    <MinimizableCertificate 
      certificateUrl={certificateUrl}
      title="Backend II Certificate"
      className="certificate-back2"
      defaultMinimized={true}
    >

        <div className="cppcode">
          <pre id="pre">
            <code>
              <span className="s1">Certificate</span>{" "}
              <span className="s2">&lt;#Backend II&gt;</span>
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
                " Felicidades por completar Backend II en Coderhouse!"
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

export default CertificateBackII;
