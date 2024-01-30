import { PlusCircle } from "@phosphor-icons/react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../dialog";
import NewProjectForm from "../forms/NewProjectForm";

const NewProjectDialog = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className="rounded-full cursor-pointer">
                    <PlusCircle size={24} className="text-green-500" />
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>What's your new project about?</DialogTitle>
                    <DialogDescription>
                        <NewProjectForm />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default NewProjectDialog;
