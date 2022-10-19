import react from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  background: var(--Background);
`;
export default function Header() {
  return (
    <Wrapper>
      <h1>Once</h1>
    </Wrapper>
  );
}
