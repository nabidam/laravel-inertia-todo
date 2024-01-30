import { Button } from "../components/ui/button";
import List from "../components/ui/list/List";
import ListItem from "../components/ui/list/ListItem";
import { ScrollArea } from "../components/ui/scroll-area";
import Layout from "./Layout";
import { Head } from "@inertiajs/react";

const Home = () => {
    return (
        <Layout>
            <Head title="Welcome" />
            <div className="bg-accent h-4/5 w-4/5 rounded-2xl p-2">
                <div className="grid grid-cols-[1fr,3fr] gap-4">
                    <div>
                        <ScrollArea>
                            <div className="p-6 w-full text-center">
                                <h2 className="font-bold text-lg">Projects</h2>
                            </div>
                            <List>
                                <ListItem>Project 1</ListItem>
                                <ListItem>Project 2</ListItem>
                                <ListItem>Project 3</ListItem>
                                <ListItem>Project 4</ListItem>
                            </List>
                        </ScrollArea>
                    </div>
                    <div>dow</div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
