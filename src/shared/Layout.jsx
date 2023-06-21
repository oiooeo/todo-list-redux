import React from "react";
import { styled } from "styled-components";

function Header() {
  return <StyledHeader>~ 투두리스트 ~</StyledHeader>;
}

function Layout({ children }) {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  );
}

const StyledHeader = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 0 0 10px 10px;
  background-color: #5395ff;
  color: #ffffff;
`;

const StyledLayout = styled.div`
  margin: 0px auto;
  max-width: 1200px;
  min-width: 800px;
  font-family: "Noto Sans KR", sans-serif;
`;

export default Layout;
