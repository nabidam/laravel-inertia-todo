import Layout from "./Layout";
import { Head } from "@inertiajs/react";

const Home = () => {
    return (
        <Layout>
            <Head title="Welcome" />
            <div className="bg-accent h-1/2 w-1/2 rounded-2xl"></div>
        </Layout>
    );
};

export default Home;
