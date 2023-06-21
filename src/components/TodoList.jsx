import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DeleteButton, UpdateButton } from "./Buttons";

const TodoList = ({ isDone }) => {
  const { todos } = useSelector((state) => state.todos);
  return (
    <>
      <TaskState>{isDone ? "완료 ✨" : "진행중 🔥"}</TaskState>
      <List>
        {todos
          .filter(function (todo) {
            return todo.isDone === isDone;
          })
          .map(function (todo) {
            return (
              <Todo key={todo.id}>
                <Title>{todo.title}</Title>
                <Content>{todo.content}</Content>
                <StyledLink to={`/detail/${todo.id}`}>상세보기</StyledLink>
                <br />
                <DeleteButton todo={todo}>삭제</DeleteButton>

                <UpdateButton todo={todo}>
                  {isDone ? "취소" : "완료"}
                </UpdateButton>
              </Todo>
            );
          })}
      </List>
    </>
  );
};

export default TodoList;

const TaskState = styled.p`
  font-size: 27px;
  padding-left: 10px;
  padding-top: 10px;
  margin-top: 10px;
  font-weight: 700;
  line-height: 2rem;
`;

const Todo = styled.div`
  width: 260px;
  padding: 5px 0px 15px 0px;
  border: 2px solid #5395ff;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  line-height: 2rem;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const Content = styled.p`
  font-size: 16px;
`;

const StyledLink = styled(Link)`
  color: #5395ff;
  font-size: 14px;
  font-weight: 500;
`;
