import { useForm } from "react-hook-form";
import { Input } from "../input";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../form";
import { Button } from "../button";
import { toast } from "sonner";
import { router } from "@inertiajs/react";

const NewProjectForm = () => {
    const form = useForm({
        defaultValues: {
            project: "",
        },
    });

    const onSubmit = async (data) => {
        if (data.project.length < 3) {
            toast.error("Please type your project name.");
            return;
        }

        try {
            router.post("/projects", data);
            toast.success("Project created successfully. Close the dialog.");
            form.reset();
        } catch (error) {
            console.error(error);
            toast.error(
                "Error: " + error.message + ". " + error.response.data.message
            );
        }
    };
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-[11fr,1fr] gap-2 justify-center items-center mt-2"
            >
                <FormField
                    control={form.control}
                    name="project"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="New Project?"
                                    className="p-4 h-full rounded-xl border-background"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="h-full rounded-xl">
                    Save
                </Button>
            </form>
        </Form>
    );
};

export default NewProjectForm;
