import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();

  return (
    <DetailDiv>
      <HomeButton
        onClick={() => {
          navigate("/");
        }}
      >
        home으로 이동
      </HomeButton>
      <p>ID : </p>
      <Title>제목</Title>
      <Content>내용</Content>
    </DetailDiv>
  );
}

const DetailDiv = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 400px;
  padding: 20px;
  border: 3px solid #5395ff;
  border-radius: 20px;
`;

const HomeButton = styled.button`
  float: right;
  padding: 5px 10px;
  background-color: #5395ffca;
  color: #ffffff;
  border: 1px solid #5395ff;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;
`;

const Title = styled.p`
  margin-top: 30px;
  font-size: 20px;
  font-weight: 500;
`;

const Content = styled.p`
  margin-top: 20px;
  font-size: 16px;
`;

export default Detail;
