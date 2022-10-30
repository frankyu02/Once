import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../Components/header";
import Modal from "../Components/modal";
import SEO from "../Components/SEO";

const Wrapper = styled.div`
  border: 1px solid black;
  width: 100vw;
  height: 100vh;
  background: var(--Background);
`;
export default function Home() {
  const [show, setShow] = React.useState();
  useEffect(() => {
    setShow(localStorage.getItem("once_show_modal") ?? true);
  }, []);
  return (
    <div>
      <SEO />
      <Header />
      {show === true && <Modal setShow={setShow} />}
      {/* <Modal setShow={setShow} /> */}
      <main>
        <Wrapper>contents go here </Wrapper>
      </main>
    </div>
  );
}
