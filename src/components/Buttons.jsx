import styled from "styled-components";

export const DeleteButton = ({ todo, clickDeleteButtonHandler, children }) => {
  return (
    <DeleteBtn onClick={() => clickDeleteButtonHandler(todo.id)}>
      {children}
    </DeleteBtn>
  );
};

export const UpdateButton = ({ todo, clickUpdateButtonHandler, children }) => {
  return (
    <UpdateBtn onClick={() => clickUpdateButtonHandler(todo.id)}>
      {children}
    </UpdateBtn>
  );
};

const DeleteBtn = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #ff8a8a;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  margin: 0px 10px;
  cursor: pointer;
  font-weight: 700;
`;

const UpdateBtn = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #83c772;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  margin: 0px 10px;
  cursor: pointer;
  font-weight: 700;
`;
