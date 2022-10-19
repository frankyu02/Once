import react from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

const Wrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  background: var(--Background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: var(--Headline);
  }
  a {
    font-size: 1.5rem;
  }
`;
export default function Header() {
  return (
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
  );
}
