import React from "react";
import {
  EditOutlined,
  DeleteOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { Todo } from "../model";
import ToDoList from "./ToDoList";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>
      <div>
        <span className="icon">
          <EditOutlined />
        </span>
        <span className="icon">
          <DeleteOutlined />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <FileDoneOutlined />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
