/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 100;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--Background);
  section {
    height: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 3px solid black;
    border-radius: 10px;
    box-shadow: 5px 10px rgba(0, 0, 0, 0.2);
    h1 {
      color: var(--Headline);
      font-size: 2rem;
    }
    p {
      color: var(--Paragraph);
      font-size: 1.5rem;
    }
    button {
      background: var(--Button);
      color: var(--ButtonText);
      width: 50%;
      height: 10%;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      &:hover {
        box-shadow: 5px 10px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

export default function Modal({ setShow }) {
  const handleClick = () => {
    setShow(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("once_show_modal", false);
    }
  };
  return (
    <ModalWrapper>
      <section>
        <h1>If You could tell the world one thing....</h1>
        <p>Wouldn't you put your heart and soul into it?</p>
        <button onClick={handleClick}>Let me see</button>
      </section>
    </ModalWrapper>
  );
}
