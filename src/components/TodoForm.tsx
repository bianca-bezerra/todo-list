import { useForm } from "react-hook-form";
import { Task } from "../types/Task";

export function TodoForm() {
  const { register, handleSubmit } = useForm<Task>();

  const onSubmit = (data: Task) => {
    return console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h-10 w-full justify-center content-center flex flex-col">
        <label className="text-black place-self-start">Tarefa:</label>
        <input type="text" {...register("text")}></input>
        <button className="bg-pink-800" type="submit" />
      </div>
    </form>
  );
}
