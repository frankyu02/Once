/* eslint-disable @next/next/no-page-custom-font */
import react from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import Head from "next/head";

const Wrapper = styled.div`
  border-bottom: 1px solid var(--Headline);
  width: 100%;
  background: var(--Background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: var(--Headline);
    font-family: "Kolker Brush", cursive;
    font-size: 50px;
  }
  a {
    font-size: 1.5rem;
    transition: 0.2s ease-in-out;
    &:hover {
      color: purple;
      transform: scale(1.5);
    }
  }
`;
export default function Header() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kolker+Brush&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Wrapper>
        <h1>Once</h1>
        <a
          href="https://github.com/frankyu02/Once"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
      </Wrapper>
    </>
  );
}
