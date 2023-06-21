import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();

  return (
    <HomeButton
      onClick={() => {
        navigate("/");
      }}
    >
      home으로 이동
    </HomeButton>
  );
}

const HomeButton = styled.button`
  font-size: 16px;
`;

export default Detail;
