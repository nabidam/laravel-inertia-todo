import { cn } from "@/resources/js/lib/utils";
import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import DoneIcon from "../icons/DoneIcon";
import NotDoneIcon from "../icons/NotDoneIcon";

const Todo = ({ children, className, done = false }) => {
    return (
        <div
            className={cn(
                "group grid grid-cols-[1fr,20fr,1fr] items-center gap-2 cursor-pointer px-4 py-4 border-background rounded-xl",
                done
                    ? "line-through text-green-600 border-0 bg-green-200"
                    : "hover:bg-cyan-950 hover:text-white",
                className
            )}
        >
            {done ? <DoneIcon /> : <NotDoneIcon />}
            <div>{children}</div>
            <div className="justify-center items-center hidden group-hover:flex">
                <Trash
                    size={24}
                    className="text-destructive"
                    weight="duotone"
                />
            </div>
        </div>
    );
};

export default Todo;
