import styled, {createGlobalStyle} from "styled-components";
import Navbar from "./components/navbar/Navbar";
import React from "react";

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: white;
  @import url("https://fonts.googleapis.com/css2?family=Splash&display=swap");
  *{
    font-family: 'Roboto', sans-serif;
  }
}
`;

const Container = styled.div`
  background-color: white;
  height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Navbar />
      </Container>
    </>
  );
}

export default App;
