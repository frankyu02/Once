import React from "react";
import styled from "styled-components";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebase } from "../Firebase/clientApp";
const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  display: flex;
  justify-content: center;
  align-items: center;
  .buttonContainer {
    width: 80%;
    height: 80%;
    max-width: 400px;
    max-height: 400px;
    //center contents
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var();
  }
`;
const uiConfig = {
  signInSuccessUrl: "/",
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

export default function SignIn() {
  return (
    <Wrapper>
      <div className="buttonContainer">
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </Wrapper>
  );
}
