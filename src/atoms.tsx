import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist({
  key: "To_Do",
  storage: localStorage,
});

export enum Categoryes {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
export interface IAtomTodo {
  text: string;
  category: Categoryes;
  id: number;
}
export const todoAtom = atom<IAtomTodo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const category = atom<Categoryes>({
  key: "categorys",
  default: Categoryes.TO_DO,
});
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(todoAtom);
    const categorys = get(category);
    return toDos.filter((todo) => todo.category === categorys);
  },
});
