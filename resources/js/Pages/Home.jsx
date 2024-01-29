import Layout from "./Layout";
import { Head } from "@inertiajs/react";

const Home = () => {
    return (
        <Layout>
            <Head title="Welcome" />
            <h1 className="font-semibold text-xl text-gray-800 leading-tight">
                Welcome
            </h1>
        </Layout>
    );
};

export default Home;
