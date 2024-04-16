import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { getDictionary } from "../../dictionaries";
export default async function Layout({ children, params: { lang } }) {
    const dictionary = await getDictionary(lang);
    return (
        <>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar dictionary={dictionary} />
                {children}
            </div>
        </>
    );
}
