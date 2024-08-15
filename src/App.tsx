import React, { useState } from "react";
import { Button } from "antd";
import "./App.css";
import InputFeild from "./components/InputFeild";
import { Todo } from "./model";
import ToDoList from "./components/ToDoList";

// let name: string;
// // Union type su dung | co the su dung 1 trong 2
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[]; // array chua nhieu ten trong 1 bien
// let role: [number, string];

// type Person = {
//   name: string;
//   age?: number;
//   // ? dung de trong cho do
// };
// //Object chua nhieu truong
// let person: Person = {
//   name: "name",
// };

// let lotsOfPeople: Person[];

// function printName(name: string) {
//   console.log(name);
// }

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <div className="App">
      <span className="Heading">Heading</span>
      <InputFeild
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      ></InputFeild>
      <ToDoList todos={todos} setTodos={setTodos}></ToDoList>
    </div>
  );
};

export default App;
