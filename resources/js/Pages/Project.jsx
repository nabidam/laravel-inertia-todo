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
import ProjectsSection from "../components/layout/ProjectsSection";
import TodosSection from "../components/layout/TodosSection";

const Home = ({ projects, project }) => {
    return (
        <Layout>
            <Head title="Welcome" />
            <div className="bg-accent min-h-4/5 w-4/5 rounded-2xl p-4">
                <div className="grid grid-cols-[1fr,3fr] gap-4">
                    <ProjectsSection
                        projects={projects}
                        selectedProject={project}
                    />
                    <TodosSection todos={project.todos} />
                </div>
            </div>
        </Layout>
    );
};

export default Home;
