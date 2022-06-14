import {atom, selector} from "recoil";

// @ts-ignore
const localStorageEffect = (key: string) => ({setSelf, onSet}) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue))
  } else {
    console.log(savedValue)
  }
  onSet((newValue: any) => {
    localStorage.setItem(key, JSON.stringify(newValue))
  })
}

export interface IToDo {
  text: string;
  id: number;
  category: string;
}
export const Categories = atom({
  key:'categories',
  default: {
    ['TO_DO']: "TO_DO",
    ['DOING']:"DOING",
    ['DONE']: "DONE"
  },
  effects_UNSTABLE: [
      localStorageEffect('categories')
  ]
})

export const categoryState = atom({
  key: "category",
  default: "TO_DO"
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [
    localStorageEffect('toDoState')
  ]
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
