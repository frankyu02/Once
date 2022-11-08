import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../Components/header";
import Modal from "../Components/modal";
import SEO from "../Components/SEO";
import SignIn from "../Components/signInContainer";

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
      <main>
        <div className="container">
          <SignIn />
        </div>
      </main>
    </div>
  );
}
