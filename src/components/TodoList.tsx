import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { category, Categoryes, todoAtom, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const TodoList = () => {
  const categoryToDos = useRecoilValue(toDoSelector);
  const [categorys, setCategory] = useRecoilState(category);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <CreateToDo />
      <select onInput={onInput}>
        <option value={Categoryes.TO_DO}>To Do</option>
        <option value={Categoryes.DOING}>Doing</option>
        <option value={Categoryes.DONE}>Done</option>
      </select>
      <ul>
        {categoryToDos.map((todo) => (
          <ToDo {...todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
