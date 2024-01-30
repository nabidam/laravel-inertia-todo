import { Link } from "@inertiajs/react";
import { ThemeProvider } from "../components/theme-provider";
import { ModeToggle } from "../components/mode-toggle";
import { Toaster } from "../components/ui/sonner";

const Layout = ({ children }) => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="body bg-background relative p-12">
                <div className="absolute right-6 top-6">
                    <ModeToggle />
                </div>
                <div className="container min-h-dvh flex flex-col justify-center items-center">
                    {children}
                </div>
                <Toaster />
            </div>
        </ThemeProvider>
    );
};

export default Layout;
