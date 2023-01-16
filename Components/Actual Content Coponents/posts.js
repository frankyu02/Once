import react from "react";
import styled from "styled-components";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../Firebase/clientApp";
import {
  collection,
  orderBy,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import PostBox from "./postBox";
const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: var(--Headline);
  }
`;
const getToday = () => {
  const now = new Date();
  now.setHours(5, 0, 0, 0);
  const timestamp = Timestamp.fromDate(now);
  return timestamp;
};
export default function PostsBox() {
  const postsRef = collection(db, "posts");
  const q = query(
    postsRef,
    where("createdAt", ">", getToday()),
    orderBy("createdAt", "desc")
  );
  const [posts, postsLoading, postsError] = useCollection(q);
  const postsData = posts?.docs;
  const today = new Date();
  return (
    <Wrapper>
      <h1>Posts from {today.toDateString()}</h1>
      {postsError && <div>Something went Wrong with loading posts</div>}
      {postsLoading && <div>loading posts...</div>}
      {posts &&
        postsData.map((data, idx) => {
          return <PostBox key={idx} postInfo={data} />;
        })}
    </Wrapper>
  );
}
