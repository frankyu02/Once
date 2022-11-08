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
    font-size: 50px;
    font-family: "Xanh Mono", monospace;
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
      <Head></Head>
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
