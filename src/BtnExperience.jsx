import React from "react";
import styled from "styled-components";

const BtnExperience = () => {
  return (
    <StyledWrapper>
      <button>Experiencia</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    font-size: 18px;
    color: rgba(
      55,
      255,
      225,
      0.29
    ); /* Cambié aquí para evitar el uso de !important */
    font-family: inherit;
    font-weight: 800;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    text-transform: uppercase;
    padding: 10px 20px;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }

  button:hover,
  button:focus {
    color: #37ffe1;
  }

  button:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #fff;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }

  button:hover:after {
    width: 100%;
    left: 0%;
  }
`;
export default BtnExperience;
