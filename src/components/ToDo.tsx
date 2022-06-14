import React from "react";
import {useRecoilValue, useSetRecoilState} from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const categoryValue = useRecoilValue(Categories);
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  // @ts-ignore
  return (
    <li>
      <span>{text}</span>
      {Object.values(categoryValue).map((v) => {
        return category !== v && (
            <button key={v} name={v} onClick={onClick}>
              {v}
            </button>)


      })}
    </li>
  );
}

export default ToDo;
