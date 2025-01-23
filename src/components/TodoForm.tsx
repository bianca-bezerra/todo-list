import { useForm } from "react-hook-form";
import { Task } from "../types/Task";

type TodoFormProps = {
  onAddTask: (task: Task) => void;
};

export function TodoForm({ onAddTask }: TodoFormProps) {
  const { register, handleSubmit } = useForm<Task>();

  return (
    <div className="h-full w-min-screen">
      <form
        className="flex-1"
        onSubmit={handleSubmit(onAddTask)}
      >
        <div className="h-1/2 w-full justify-center content-center flex flex-col bg-pink-200">
          <label className="text-black place-self-start">Titulo:</label>
          <input type="text" {...register("title")}></input>

          <label className="text-black place-self-start">Descrição:</label>
          <input type="text" {...register("description")}></input>

          <button className="h-10 w-full text-white" type="submit" >Enviar</button>
        </div>
      </form>
    </div>
  );
}
