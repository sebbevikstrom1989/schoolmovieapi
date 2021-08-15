import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <p>Copyright Sebastian</p>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-top: 1px solid black;
`;
