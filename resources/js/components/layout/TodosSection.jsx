import { HandPointing, Trash } from "@phosphor-icons/react";
import NewTodoForm from "../ui/forms/NewTodoForm";
import Todo from "../ui/todos/Todo";
import TodoList from "../ui/todos/TodoList";
import { Button } from "../ui/button";
import { router } from "@inertiajs/react";
import { toast } from "sonner";

const TodosSection = ({ todos, project }) => {
    const deleteProject = (id) => {
        router.delete(`/projects/${project.id}`);
        toast.success("Project deleted successfully.");
    };
    return (
        <div className="flex flex-col gap-2">
            <div className="p-6 w-full text-center">
                <h2 className="font-bold text-lg">Todos</h2>
                {project && (
                    <div className="flex w-full justify-center items-center gap-2">
                        <p className="text-xs text-muted-foreground">
                            of project: {project.title}
                        </p>
                        <Button
                            className="px-1 py-1 h-6 text-xs"
                            variant="destructive"
                            onClick={() => deleteProject(project.id)}
                        >
                            Delete project
                        </Button>
                    </div>
                )}
            </div>
            {todos ? (
                <>
                    <div>
                        <NewTodoForm project={project} />
                    </div>
                    <div>
                        <TodoList>
                            {todos.length ? (
                                todos.map((todo) => (
                                    <Todo todo={todo} key={todo.id} />
                                ))
                            ) : (
                                <div className="flex flex-row gap-4 justify-center items-center text-sm text-muted-foreground text-center w-56 mx-auto mt-4">
                                    Add your first todo{" "}
                                    <HandPointing
                                        size={24}
                                        className="bounce"
                                    />
                                </div>
                            )}
                        </TodoList>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex flex-col justify-center items-center text-sm text-muted-foreground text-center w-56 mx-auto">
                        To manage your projects todos, please select one of the
                        projects in the left section
                    </div>
                </>
            )}
            {/* <div>
        <NewTodoForm />
    </div>
    <div>
        <TodoList>
            <Todo done={false}>Drink water</Todo>
            <Todo done={false}>Drink water</Todo>
            <Todo done={false}>Drink water</Todo>
            <Todo done={false}>Drink water</Todo>
            <Todo done={false}>Drink water</Todo>
            <Todo done={true}>Buy Cake</Todo>
            <Todo done={true}>Buy Cake</Todo>
            <Todo done={true}>Buy Cake</Todo>
            <Todo done={true}>Buy Cake</Todo>
            <Todo done={true}>Buy Cake</Todo>
        </TodoList>
    </div> */}
        </div>
    );
};

export default TodosSection;
