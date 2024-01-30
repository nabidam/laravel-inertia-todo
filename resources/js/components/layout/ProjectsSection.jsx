import { Badge } from "../ui/badge";
import NewProjectDialog from "../ui/dialogs/NewProjectDialog";
import List from "../ui/list/List";
import ListItem from "../ui/list/ListItem";
import { Link } from "@inertiajs/react";

const ProjectsSection = ({ projects, selectedProject = null }) => {
    return (
        <div className="flex flex-col">
            <div className="p-6 w-full text-center flex justify-center items-center gap-2">
                <h2 className="font-bold text-lg">Projects</h2>
                <NewProjectDialog />
            </div>
            <div className="relative flex items-center w-full">
                <List>
                    {projects?.length ? (
                        projects.map((project) => (
                            <Link
                                href={`/projects/${project.id}`}
                                key={project.id}
                            >
                                <ListItem
                                    className={
                                        selectedProject?.id == project.id
                                            ? "bg-secondary-foreground text-secondary"
                                            : ""
                                    }
                                >
                                    {project.title}{" "}
                                    {project.pending_todos_count ? (
                                        <Badge variant="destructive">
                                            {project.pending_todos_count}
                                        </Badge>
                                    ) : (
                                        ""
                                    )}
                                </ListItem>
                            </Link>
                        ))
                    ) : (
                        <div className="flex flex-col justify-center items-center text-sm text-muted-foreground text-center">
                            There is no project, create one by clicking on the{" "}
                            <NewProjectDialog />
                            button, in the header
                        </div>
                    )}
                </List>
            </div>
        </div>
    );
};

export default ProjectsSection;
