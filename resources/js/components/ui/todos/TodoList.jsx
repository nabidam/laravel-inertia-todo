import { cn } from "@/resources/js/lib/utils";

const TodoList = ({ children, className }) => {
    return (
        <div className={cn("flex flex-col gap-2", className)}>{children}</div>
    );
};

export default TodoList;
