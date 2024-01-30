import Layout from "./Layout";
import { Head } from "@inertiajs/react";
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
                    <TodosSection todos={project.todos} project={project} />
                </div>
            </div>
        </Layout>
    );
};

export default Home;
