import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../Components/header";
import Modal from "../Components/modal";
import SEO from "../Components/SEO";
import SignIn from "../Components/signInContainer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../Firebase/clientApp";
import ActualContent from "../Components/actualContent";

export default function Home() {
  const [show, setShow] = React.useState();
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    setShow(localStorage.getItem("once_show_modal") ?? true);
  }, []);
  return (
    <div>
      <SEO />
      {show === true && <Modal setShow={setShow} />}
      {loading ? (
        "" //make loding animation later
      ) : (
        <>
          <Header />
          <main>
            <div className="container">
              {user ? <ActualContent user={user} /> : <SignIn />}
            </div>
          </main>
        </>
      )}
    </div>
  );
}
