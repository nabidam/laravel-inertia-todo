import { HandPointing } from "@phosphor-icons/react";
import NewTodoForm from "../ui/forms/NewTodoForm";
import Todo from "../ui/todos/Todo";
import TodoList from "../ui/todos/TodoList";

const TodosSection = ({ todos }) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="p-6 w-full text-center">
                <h2 className="font-bold text-lg">Todos</h2>
            </div>
            {todos ? (
                <>
                    <div>
                        <NewTodoForm />
                    </div>
                    {todos.length ? (
                        todos.map((todo) => (
                            <div key={todo.id}>
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
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-row gap-4 justify-center items-center text-sm text-muted-foreground text-center w-56 mx-auto mt-4">
                            Add your first todo{" "}
                            <HandPointing size={24} className="bounce" />
                        </div>
                    )}
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
