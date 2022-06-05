import { stringify } from "querystring";
import React from "react";
import { useSetRecoilState } from "recoil";
import { Categoryes, IAtomTodo, todoAtom } from "../atoms";

const ToDo = ({ text, category, id }: IAtomTodo) => {
  const setToDos = useSetRecoilState(todoAtom);
  // const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   const {
  //     currentTarget: { name },
  //   } = event;
  //   setToDos((oldToDos) => {
  //     const targetIndex = oldToDos.findIndex((todo) => todo.id === id);
  //     const oldToDo = oldToDos[targetIndex];
  //     const newToDo = { ...oldToDo, category: name as any };
  //     return [
  //       ...oldToDos.slice(0, targetIndex),
  //       newToDo,
  //       ...oldToDos.slice(targetIndex + 1),
  //     ];
  //   });
  // };

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((todo) => todo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { ...oldToDo, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const btnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDos((oldToDos) =>
      oldToDos.filter((todo) => todo.id !== Number(value))
    );
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categoryes.DOING && (
        <button name={Categoryes.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categoryes.TO_DO && (
        <button name={Categoryes.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categoryes.DONE && (
        <button name={Categoryes.DONE} onClick={onClick}>
          Done
        </button>
      )}
      <button value={id} onClick={btnClick}>
        X
      </button>
    </li>
  );
};

export default ToDo;
