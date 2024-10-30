import React, { useState } from "react";
import styled from "styled-components";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <SearchContainer>
      <Input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)} // 입력값 업데이트
        placeholder="축제를 검색하세요..."
      />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  width: 500px;

  border-radius: 10px;
  box-shadow: 0px 2px 5px #b2bbc6;
`;

const Input = styled.input`
  width: 80%;
  font-size: 19px;
  border: 0px;
  font-size: 13px;
  /* margin-left: 10px; */
  padding: 8px 5px 8px 8px;
  border-radius: 1px;
  /* margin-top: 10px; */
  &:focus {
    border: none;
    outline: none;
  }
`;

export default SearchBar;
