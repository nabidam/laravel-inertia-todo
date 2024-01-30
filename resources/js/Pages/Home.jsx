import { PlusCircle } from "@phosphor-icons/react";
import { Button } from "../components/ui/button";
import NewTodoForm from "../components/ui/forms/NewTodoForm";
import { Input } from "../components/ui/input";
import List from "../components/ui/list/List";
import ListItem from "../components/ui/list/ListItem";
import { ScrollArea } from "../components/ui/scroll-area";
import Todo from "../components/ui/todos/Todo";
import TodoList from "../components/ui/todos/TodoList";
import Layout from "./Layout";
import { Head } from "@inertiajs/react";
import NewProjectDialog from "../components/ui/dialogs/NewProjectDialog";

const Home = () => {
    return (
        <Layout>
            <Head title="Welcome" />
            <div className="bg-accent min-h-4/5 w-4/5 rounded-2xl p-4">
                <div className="grid grid-cols-[1fr,3fr] gap-4">
                    <div className="flex flex-col">
                        <div className="p-6 w-full text-center flex justify-center items-center gap-2">
                            <h2 className="font-bold text-lg">Projects</h2>
                            <NewProjectDialog />
                        </div>
                        <div className="relative flex items-center w-full">
                            <List>
                                <ListItem>Project 1</ListItem>
                                <ListItem>Project 2</ListItem>
                                <ListItem>Project 3</ListItem>
                                <ListItem>Project 4</ListItem>
                            </List>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="p-6 w-full text-center">
                            <h2 className="font-bold text-lg">Todos</h2>
                        </div>
                        <div>
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
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
