import { MenuItem, Select, TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

function Form({ setSearchValue, searchValue, movieType, setMovieType }) {
  return (
    <Container>
      <FormWrapper>
        <TextField
          variant="outlined"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Type to search..."
        />
        <Select
          variant="outlined"
          onChange={(e) => setMovieType(e.target.value)}
          value={movieType}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="movie">Movie</MenuItem>
          <MenuItem value="series">Series</MenuItem>
          <MenuItem value="episode">Episode</MenuItem>
        </Select>
      </FormWrapper>
    </Container>
  );
}

export default Form;

const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormWrapper = styled.div``;
