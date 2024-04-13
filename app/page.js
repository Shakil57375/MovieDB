import Header from "@/components/Header";
import Movies from "@/components/Movies";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Home = () => {
    return (
        <div>
            <Header />
            <main class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar />
                <Movies />
            </main>
        </div>
    );
};

export default Home;
