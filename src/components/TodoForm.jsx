import React from "react";
import styled from "styled-components";

function TodoForm({ setValue, todo, todos, setTodos, setTodo }) {
  const clickAddButtonHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      ...todo,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
    setTodo({ title: "", content: "" });
  };

  return (
    <Form onSubmit={clickAddButtonHandler}>
      <InputGroup>
        <b>제목</b> &nbsp;
        <Input name="title" value={todo.title} onChange={setValue} required />
        <b>내용</b> &nbsp;
        <Input
          name="content"
          value={todo.content}
          onChange={setValue}
          required
        />
      </InputGroup>
      <AddBtn>제출</AddBtn>
    </Form>
  );
}

const Form = styled.form`
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: #e6e6e6;
  padding: 20px;
  border-radius: 10px;
`;

const InputGroup = styled.div`
  align-items: center;
  display: flex;
`;

const Input = styled.input`
  border: none;
  border-radius: 10px;
  padding: 10px 10px;
  margin-right: 20px;
  margin-left: 10px;
`;

const AddBtn = styled.button`
  background-color: #5395ff;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 10px 50px;
  cursor: pointer;
  font-weight: 700;
`;

export default TodoForm;
