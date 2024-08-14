import React from "react";
import { Button } from "antd";
import "./App.css";

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
  return (
    <div className="App">
      <span className="heading">Heading</span>
    </div>
  );
};

export default App;
