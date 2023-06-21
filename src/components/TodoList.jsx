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
                <StyledLink to={`/detail/${todo.id}`}>상세보기</StyledLink>
                {/* <br /> */}
                <Title>{todo.title}</Title>
                <Content>{todo.content}</Content>
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
  padding: 5px 10px 15px 10px;
  border: 2px solid #aeaeae;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  line-height: 2rem;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  color: #5395ff;
  font-size: 14px;
  font-weight: 500;
  float: right;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: start;
`;

const Content = styled.p`
  font-size: 16px;
  text-align: start;
`;
