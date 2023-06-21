// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

// Action Creator
export const createTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

export const toggleStatusTodo = (payload) => {
  return { type: TOGGLE_STATUS_TODO, payload };
};

// initial State
const initialState = {
  todos: [
    {
      id: Date.now(),
      title: "리액트 공부하기",
      content: "리액트 입문 강의 듣기",
      isDone: true,
    },
    {
      id: Date.now() + 1,
      title: "리액트 공부하기",
      content: "리액트 숙련 강의 듣기",
      isDone: false,
    },
  ],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_STATUS_TODO:
      const toggleStatusTodos = state.todos.map(function (item) {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
      return { ...state, todos: toggleStatusTodos };
    case DELETE_TODO:
      const deletedTodos = state.todos.filter(
        (todo) => action.payload !== todo.id
      );
      return { ...state, todos: deletedTodos };
    default:
      return state;
  }
};

export default todos;
