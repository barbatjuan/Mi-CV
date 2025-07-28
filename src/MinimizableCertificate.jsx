import React, { useState } from "react";
import "./MinimizableCertificate.css";

const MinimizableCertificate = ({ 
  certificateUrl, 
  children, 
  className = "",
  title = "Certificate",
  defaultMinimized = false 
}) => {
  const [isMinimized, setIsMinimized] = useState(defaultMinimized);

  const handleMinimize = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMinimized(true);
  };

  const handleMaximize = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMinimized(false);
  };

  const handleCertificateClick = () => {
    if (!isMinimized) {
      window.open(certificateUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`minimizable-certificate ${isMinimized ? 'minimized' : 'maximized'} ${className}`}>
      {/* Barra de título siempre visible */}
      <div className="certificate-titlebar">
        <div className="window-title">{title}</div>
        <div className="window-controls">
          <button 
            className="control-btn minimize-btn" 
            onClick={handleMinimize}
            title="Minimizar"
          >
            <svg viewBox="0 0 10 2">
              <rect x="0" y="0" width="10" height="2" />
            </svg>
          </button>
          <button 
            className="control-btn maximize-btn" 
            onClick={handleMaximize}
            title="Maximizar"
          >
            <svg viewBox="0 0 10 10">
              <rect x="0" y="0" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </button>
          <button 
            className="control-btn close-btn" 
            onClick={handleMinimize}
            title="Cerrar"
          >
            <svg viewBox="0 0 10 10">
              <polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Contenido del certificado */}
      {!isMinimized && (
        <div className="certificate-body" onClick={handleCertificateClick}>
          {children}
        </div>
      )}
    </div>
  );
};

export default MinimizableCertificate;
