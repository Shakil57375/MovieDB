import Movies from "@/components/Movies";
import Sidebar from "@/components/Sidebar";
import React from "react";
import { getDictionary } from "./dictionaries";

const Home = async ({params : {lang}}) => {
    const dictionary = await getDictionary(lang)
    return (
        <div>
            <main className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar dictionary = {dictionary} />
                <Movies />
            </main>
        </div>
    );
};

export default Home;
