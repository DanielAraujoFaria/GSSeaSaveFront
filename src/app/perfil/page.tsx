import MeusReports from "@/components/MeusReports";
import TopPerfil from "@/components/TopPerfil";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Perfil() {
    return(
        <main className="flex h-screen bg-cover bg-[url('../../public/ocean2.jpg')]">
            <div className="flex flex-row w-48 p-5 mr-56 -ml-48">
                <Link href="/postpage">
                    <h1 className="text-3xl font-extrabold text-[#2298cf] mr-36 p-9 w-96 bg-white/70 text-nowrap text-end rounded-lg hover:bg-white">SEA SAVE</h1>
                </Link>
            </div>
            <div className="flex flex-col overflow-y-auto p-2 h-full gap-1" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <TopPerfil />
            <Button className="flex justify-center bg-[#2298cf] mb-5 mt-5 px-10 py-12 outline outline-[#2298cf] hover:outline-offset-4 hover:bg-[#2298cf]/40 hover:text-[#2298cf] hover:font-semibold rounded-lg text-white">
                Criar Post
            </Button>
            <MeusReports />
            <MeusReports />
            <MeusReports />
            </div>
        </main>
    )
}