import { ThemeProvider } from "@/components/theme-provider";
import { Link } from "@inertiajs/react";
import { ModeToggle } from "../components/mode-toggle";

const Layout = ({ children }) => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="body bg-background relative">
                <div className="absolute right-6 top-6">
                    <ModeToggle />
                </div>
                <div className="container h-dvh flex flex-col justify-center items-center">
                    {children}
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Layout;
