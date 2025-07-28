import React from "react";
import styled from "styled-components";

const WhatsAppButton = () => {
  return (
    <StyledWrapper>
      <a
        href="https://wa.me/34655088494"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <svg 
          className="whatsapp-icon" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
        </svg>
        WhatsApp
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .whatsapp-btn {
    font-size: 16px;
    color: rgba(55, 255, 225, 0.7);
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    letter-spacing: 1px;
    cursor: pointer;
    position: relative;
    border: 1px solid rgba(55, 255, 225, 0.3);
    background: rgba(55, 255, 225, 0.05);
    text-transform: uppercase;
    padding: 12px 24px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color, border-color, background-color, box-shadow;
    backdrop-filter: blur(10px);
  }

  .whatsapp-icon {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
  }

  .whatsapp-btn:hover,
  .whatsapp-btn:focus {
    color: #37ffe1;
    border-color: #37ffe1;
    background: rgba(55, 255, 225, 0.1);
    box-shadow: 0 0 20px rgba(55, 255, 225, 0.3), 0 0 40px rgba(55, 255, 225, 0.1);
  }

  .whatsapp-btn:hover .whatsapp-icon {
    transform: scale(1.1);
  }

  .whatsapp-btn:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background: linear-gradient(90deg, #37ffe1, #25d4aa);
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }

  .whatsapp-btn:hover:after {
    width: 100%;
    left: 0%;
  }
`;

export default WhatsAppButton;
