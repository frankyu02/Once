import Head from "next/head";
import styled from "styled-components";
import Header from "../Components/header";

const Wrapper = styled.div`
  border: 1px solid black;
  width: 100vw;
  height: 100vh;
  background: var(--Background);
`;
export default function Home() {
  return (
    <div>
      <Head>
        <title>Once - Frank Yu</title>
        <meta
          name="description"
          content="If you can only post one thing a day, wouldn't it be the most meaningful thing you'll say all day?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Wrapper>a</Wrapper>
      </main>
    </div>
  );
}
