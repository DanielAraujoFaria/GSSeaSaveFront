import PerfilPreview from "@/components/PerfilPreview";
import Reports from "@/components/Reports";
import Link from "next/link";

export default function Postpage() {
    return (
        <main className="flex h-screen overflow-hidden bg-cover bg-[url('../../public/ocean2.jpg')]">
            <div className="flex flex-col flex-grow overflow-y-auto h-full gap-1" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <Reports />
                <Reports />
                <Reports />
            </div>
            <div className="flex flex-col gap-20 w-1/3 overflow-hidden -mr-10 p-5">
                <Link href="/">
                    <h1 className="text-3xl font-extrabold hover:bg-white text-[#2298cf] p-9 bg-white/70 rounded-lg">SEA SAVE</h1>
                </Link>
                <PerfilPreview />
            </div>
        </main>
    );
}
