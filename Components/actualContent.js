import React from "react";
import styled from "styled-components";
import InputBox from "./Actual Content Coponents/inputBox";
import PostsBox from "./Actual Content Coponents/posts";

const Wrapper = styled.section`
  width: 100%;
  height: calc(100vh - 150px);
  background: var(--Background);
`;
export default function ActualContent({ user }) {
  return (
    <Wrapper>
      <PostsBox />
      <InputBox user={user} />
    </Wrapper>
  );
}
