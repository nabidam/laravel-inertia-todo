import { cn } from "@/resources/js/lib/utils";

const ListItem = ({ children, className }) => {
    return (
        <div
            className={cn(
                "flex flex-row items-center justify-between cursor-pointer hover:bg-secondary-foreground hover:text-secondary duration-300 rounded-xl px-4 py-2",
                className
            )}
        >
            {children}
        </div>
    );
};

export default ListItem;
