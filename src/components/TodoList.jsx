import React from "react";
import styled from "styled-components";
import { DeleteButton, UpdateButton } from "./Buttons";
import { Link } from "react-router-dom";

function TodoList({ todos, setTodos, isDone }) {
  return (
    <div>
      <TaskState>{isDone ? "완료 ✨" : "진행중 🔥"}</TaskState>
      <List>
        {todos
          .filter(function (todo) {
            return todo.isDone === isDone;
          })
          .map(function (todo) {
            const clickDeleteButtonHandler = (id) => {
              const newTodos = todos.filter((item) => item.id !== todo.id);
              setTodos(newTodos);
            };

            const clickUpdateButtonHandler = (id) => {
              const newTodos = todos.map(function (item) {
                if (item.id === todo.id) {
                  return { ...item, isDone: !item.isDone };
                } else {
                  return item;
                }
              });
              setTodos(newTodos);
            };

            return (
              <Todo key={todo.id}>
                <Title>{todo.title}</Title>
                <Content>{todo.content}</Content>
                <StyledLink to={`/detail/${todo.id}`}>상세보기</StyledLink>
                <br />
                <DeleteButton
                  todo={todo}
                  clickDeleteButtonHandler={clickDeleteButtonHandler}
                >
                  삭제
                </DeleteButton>

                <UpdateButton
                  todo={todo}
                  clickUpdateButtonHandler={clickUpdateButtonHandler}
                >
                  {isDone ? "취소" : "완료"}
                </UpdateButton>
              </Todo>
            );
          })}
      </List>
    </div>
  );
}

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

export default TodoList;
