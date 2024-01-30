import { ThemeProvider } from "../components/theme-provider";
import { ModeToggle } from "../components/mode-toggle";
import { Toaster } from "../components/ui/sonner";
import { Heart } from "lucide-react";
import CopyRight from "../components/ui/CopyRight";

const Layout = ({ children }) => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="body bg-background relative p-12">
                <div className="absolute right-6 top-6">
                    <ModeToggle />
                </div>
                <div className="container min-h-[1000px] flex flex-col justify-center items-center">
                    {children}
                </div>
                <Toaster />
            </div>
            <CopyRight />
        </ThemeProvider>
    );
};

export default Layout;
