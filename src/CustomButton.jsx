import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <a
        href="mailto:hola@juanbarbat.dev"
        className="button"
        data-text="Awesome"
      >
        <span className="actual-text">&nbsp;Contactame&nbsp;</span>
        <span aria-hidden="true" className="hover-text">
          &nbsp;Contactame&nbsp;
        </span>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* === removing default button style ===*/
  .button {
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    text-decoration: none; /* Para quitar subrayado */
    display: inline-block; /* Asegura que el botón no cambie de tamaño al hacer hover */
    position: relative;
  }

  /* button styling */
  .button {
    --border-right: 6px;
    --text-stroke-color: rgba(255, 255, 255, 0.6);
    --animation-color: #37ffe1;
    --fs-size: 2em;
    letter-spacing: 3px;
    font-size: var(--fs-size);
    font-family: "Arial";
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
  }

  /* this is the text, when you hover on button */
  .hover-text {
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: var(--animation-color);
    width: 0%; /* Mantenerlo oculto al principio */
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px var(--animation-color);
  }

  /* hover */
  .button:hover .hover-text {
    width: 100%; /* Ancho completo solo en hover */
    filter: drop-shadow(0 0 23px var(--animation-color));
  }

  /* Text inside button */
  .actual-text {
    position: relative;
    z-index: 1; /* Asegura que el texto no se sobreponga con la animación */
  }
`;

export default Button;
