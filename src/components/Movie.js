/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";

function Movie({ title, poster, year, type, imdb }) {
  return (
    <Container>
      <Wrap>
        <a href={`https://www.imdb.com/title/${imdb}`} target="_blank">
          <img src={poster} alt={title} />
        </a>
        <h4>{title}</h4>
        <p>{year}</p>
        <p>{type}</p>
      </Wrap>
    </Container>
  );
}

export default Movie;

const Container = styled.div``;

const Wrap = styled.div`
  border-radius: 10px;
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;
  margin: 40px 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    max-height: 400px;
    max-width: 400px;
    object-fit: fill;
  }

  &:hover {
    box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }

  h4,
  h3,
  p {
    text-align: center;
    padding: 3px;
  }
`;
