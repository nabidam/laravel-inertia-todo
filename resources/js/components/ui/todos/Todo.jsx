import { cn } from "@/resources/js/lib/utils";
import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import DoneIcon from "../icons/DoneIcon";
import NotDoneIcon from "../icons/NotDoneIcon";
import { router } from "@inertiajs/react";
import { toast } from "sonner";

const Todo = ({ todo, className }) => {
    const toggleDone = (id) => {
        router.post(`/projects/${todo.project_id}/todos/${todo.id}/toggle`);
        let status = !todo.done ? "done" : "pending";
        toast.success(`Todo marked as ${status}.`);
    };

    const deleteTodo = (id) => {
        router.delete(`/projects/${todo.project_id}/todos/${todo.id}`);
        toast.success(`Todo deleted successfully.`);
    };

    return (
        <div
            className={cn(
                "group grid grid-cols-[20fr,1fr] items-center gap-2 cursor-pointer px-4 border-background rounded-xl",
                todo.done
                    ? "line-through text-green-600 border-0 bg-green-200"
                    : "hover:bg-cyan-950 hover:text-white",
                className
            )}
        >
            <div
                className="flex items-center gap-2"
                onClick={() => toggleDone(todo.id)}
            >
                {todo.done ? <DoneIcon /> : <NotDoneIcon />}
                <div className="py-4">{todo.todo}</div>
            </div>
            <div
                className="justify-center items-center hidden group-hover:flex border-2 border-destructive p-1 rounded-full bg-red-200"
                onClick={() => deleteTodo(todo.id)}
            >
                <Trash size={24} className="text-destructive" weight="fill" />
            </div>
        </div>
    );
};

export default Todo;
