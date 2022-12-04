import Image from "next/image";
import react from "react";
import styled from "styled-components";
import noPhoto from "../../assets/no-photos.png";
const Wrapper = styled.section`
  width: 90%;
  height: 20%;
  outline: 3px solid black;
  border-radius: 5px;
  color: var(--Paragraph);
  background-color: var(--IllustrationBackground);
  display: grid;
  img {
    border-radius: 50%;
  }
  display: flex;
  .textArea {
    width: 80%;
    height: 100%;
    p {
      margin: 0;
      font-weight: bold;
      overflow: auto;
    }
  }
  .details {
    width: 20%;
    height: 100%;
    h2 {
      margin: 0;
      color: var(--Header);
    }
    p {
      margin: 0;
      color: var(--Paragraph);
    }
  }
  padding: 10px;
  margin-top: 15px;
  margin-bottom: 10px;
`;
export default function PostBox({ postInfo }) {
  const data = postInfo.data();
  const date = data.createdAt?.toDate()?.toDateString();
  const text = data.text;
  const pfp = data.createdProfile;
  const name = data.createdBy;
  return (
    <Wrapper>
      <div className="details">
        <Image src={pfp || noPhoto} alt="user Image" width="50%" height="50%" />
        <h2>{name}</h2>
        <p>Created On: {date}</p>
      </div>
      <div className="textArea">
        <p>{text}</p>
      </div>
    </Wrapper>
  );
}
