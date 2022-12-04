import react from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import HeaderSideBar from "./headerSideBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/clientApp";

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
    margin: 0;
  }
  a {
    font-size: 1.5rem;
    transition: 0.2s ease-in-out;
    color: #6e5494;
    &:hover {
      color: purple;
      transform: scale(1.5);
    }
  }
  .logOut {
    display: flex;
    position: absolute;
    right: 10px;
    height: 50px;
    width: 30%;
    justify-content: flex-end;
    .buttonDiv {
      width: 40%;
      display: flex;
      //center
      align-items: center;
      justify-content: center;
    }
    button {
      background: var(--Button);
      border-radius: 5px;
      border: none;
      height: 80%;
      width: 100%;
      color: var(--ButtonText);
      &:hover {
        cursor: pointer;
        border: 1px solid black;
      }
    }
    .userSummary {
      display: flex;
      margin-right: 10px;
      img {
        border-radius: 50%;
      }
    }
  }
`;
export default function Header() {
  const [user] = useAuthState(auth);
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
        {user ? <HeaderSideBar /> : ""}
      </Wrapper>
    </>
  );
}
