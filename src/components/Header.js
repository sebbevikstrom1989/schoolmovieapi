import styled from "styled-components";
import React from "react";

function Header() {
  return (
    <Container>
      <img
        src="/images/PinClipart.com_movie-projector-clip-art_2122993.png"
        alt=""
      />
      <h1>Movie API</h1>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;

  h1 {
    font-family: "Lobster Two", cursive;
    font-size: 50px;
  }

  img {
    width: 50px;
    margin-right: 10px;
  }
`;
