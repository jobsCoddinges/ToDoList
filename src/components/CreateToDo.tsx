import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { category, todoAtom } from "../atoms";
interface Itodo {
  todo: string;
}
const CreateToDo = () => {
  const categorys = useRecoilValue(category);
  const setTodos = useSetRecoilState(todoAtom);
  const onValid = ({ todo }: Itodo) => {
    setTodos((prevTodos) => [
      { text: todo, category: categorys, id: Date.now() },
      ...prevTodos,
    ]);
    setValue("todo", "");
  };
  const { register, handleSubmit, setValue } = useForm<Itodo>();
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("todo", { required: "please write to do" })}
        placeholder="write to do"
      />
      <button>Add</button>
    </form>
  );
};

export default CreateToDo;
