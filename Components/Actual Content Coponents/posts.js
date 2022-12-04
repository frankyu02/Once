import react from "react";
import styled from "styled-components";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../Firebase/clientApp";
import { collection, orderBy, query } from "firebase/firestore";
import PostBox from "./postBox";
const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  outline: 5px solid red;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default function PostsBox() {
  const postsRef = collection(db, "posts");
  const q = query(postsRef, orderBy("createdAt", "desc"));
  const [posts, postsLoading, postsError] = useCollection(q);
  const postsData = posts?.docs;
  return (
    <Wrapper>
      {postsError && <div>Something went Wrong with loading posts</div>}
      {postsLoading && <div>loading posts...</div>}
      {posts &&
        postsData.map((data, idx) => {
          return <PostBox key={idx} postInfo={data} />;
        })}
    </Wrapper>
  );
}
