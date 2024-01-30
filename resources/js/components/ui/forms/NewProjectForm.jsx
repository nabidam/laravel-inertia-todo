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

const NewProjectForm = () => {
    const form = useForm({
        defaultValues: {
            project: "",
        },
    });

    const onSubmit = (data) => {
        console.log({ data });
        toast("project saved.");
        form.reset();
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
