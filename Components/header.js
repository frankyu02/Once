import react from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import firebase from "../Firebase/clientApp";
import HeaderSideBar from "./headerSideBar";
import { useAuthState } from 'react-firebase-hooks/auth';

const Wrapper = styled.div`
  border-bottom: 1px solid var(--Headline);
  width: 100%;
  background: var(--Background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
  position: relative;
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
  .logOut {
    position: absolute;
    right: 0;
    border: 1px solid black;
    height: 50px;
    width: 100px;
    button{
      height: 100%;
      width: 100%;
    }
  }
`;
export default function Header() {
  const [user] = useAuthState(firebase.auth());
  console.log(user);
  return (
    <>
      <Wrapper>
        <h1>Once</h1>
        <a
          href="https://github.com/frankyu02/Once"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        {user ? <HeaderSideBar /> : ''}
      </Wrapper>
    </>
  );
}
