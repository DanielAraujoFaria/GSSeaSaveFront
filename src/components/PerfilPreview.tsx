import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function PerfilPreview() {
    return (
        <nav>
            <section className="flex flex-col items-center gap-8 pt-10 rounded-lg bg-white">
                <div className="w-36 rounded-full overflow-hidden">
                    <Link href="/perfil">
                        <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
                    </Link>
                </div>
                <p>@loremipsum</p>
                <Button className="bg-[#2298cf] mb-10 outline outline-[#2298cf] hover:outline-offset-4 hover:bg-[#2298cf]/40 hover:text-[#2298cf] hover:font-semibold px-10 py-3 rounded-lg text-white">
                    Criar Post
                </Button>
            </section>
        </nav>
    );
}
