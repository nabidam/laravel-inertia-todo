import { Heart } from "@phosphor-icons/react";

const CopyRight = () => {
    return (
        <footer className="text-primary flex flex-col justify-center items-center py-2 gap-2">
            <div className="flex gap-2">
                Made with{" "}
                <Heart size={24} weight="fill" className="text-red-500" /> by{" "}
                <a href="https://github.com/nabidam" target="_blank">
                    NabidaM
                </a>
            </div>
            <div className="flex gap-1">
                Powered by{" "}
                <a href="https://laravel.com/" target="_blank">
                    Laravel
                </a>
                ,{" "}
                <a href="https://inertiajs.com/" target="_blank">
                    InertiaJS
                </a>
                ,{" "}
                <a href="https://react.dev/" target="_blank">
                    ReactJS
                </a>
                , and{" "}
                <a href="https://tailwindcss.com/" target="_blank">
                    TailwindCSS
                </a>
            </div>
        </footer>
    );
};

export default CopyRight;
