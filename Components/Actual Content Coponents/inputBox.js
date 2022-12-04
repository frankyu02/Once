import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import react, { useState } from "react";
import styled from "styled-components";
import { db } from "../../Firebase/clientApp";
import { useDocument } from "react-firebase-hooks/firestore";

const Wrapper = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  border: 2px solid var(--Paragraph);
  justify-content: space-around;
  align-items: center;
  input {
    background: white;
    width: 80%;
    height: 80%;
  }
  input,
  select,
  textarea {
    color: var(--Paragraph);
  }
  .no-post-textbox {
    opacity: 50%;
    pointer-events: none;
    border: none;
  }
  button {
    width: 10%;
    height: 80%;
    background-color: var(--Button);
    color: var(--ButtonText);
    &:hover {
      cursor: pointer;
    }
    &:disabled {
      cursor: default;
      opacity: 50%;
    }
  }
`;
const canUserPost = (user) => {
  if (!user?.exists()) {
    return true;
  } else {
    const data = user?.data();
    const date = data?.LastPosted?.toDate();
    const now = new Date();
    const msBetweenDates = Math.abs(date?.getTime() - now.getTime());
    const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);
    return hoursBetweenDates >= 24;
  }
};
export default function InputBox({ user }) {
  const [sending, setSending] = useState(false);
  const [text, setText] = useState("");
  const [dbUser, loadingUser, errorUser] = useDocument(
    doc(db, "users", user.uid)
  );
  let canPost;
  if (!loadingUser) {
    canPost = canUserPost(dbUser);
  }
  const handleTextChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const sendData = async () => {
    const sendingData = {
      createdAt: serverTimestamp(),
      createdBy: user.displayName,
      createdProfile: user.photoURL,
      text: text,
    };
    setSending(true);
    await addDoc(collection(db, "posts"), sendingData)
      .then(async () => {
        await setDoc(doc(db, "users", user.uid), {
          LastPosted: serverTimestamp(),
        });
      })
      .finally(() => {
        setSending(false);
        setText("");
      });
  };
  const disabled = sending || text.length <= 0 || loadingUser || !canPost;
  return (
    <Wrapper>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        tabIndex="-1"
        placeholder={
          canPost
            ? "Hey Lets make a post!"
            : "Sorry, only one post is allowd per day!"
        }
        className={canPost ? "" : "no-post-textbox"}
      />
      <button disabled={disabled} onClick={sendData}>
        post
      </button>
    </Wrapper>
  );
}
