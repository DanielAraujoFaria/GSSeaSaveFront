import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";

export default function HomeNav() {
    return (
      <main>
        <div className="flex min-h-screen flex-col items-center gap-8 ml-5 px-20 bg-white/70">
          <h1 className="text-3xl font-extrabold mt-28 text-[#2298cf]">SEA SAVE</h1>
          <h2 className="text-xl text-nowrap">Crie uma conta agora</h2>
          <Link href="/cadastro">
            <Button className="bg-[#2298cf] outline outline-[#2298cf] hover:outline-offset-4 hover:bg-[#2298cf]/40 hover:text-[#2298cf] hover:font-semibold px-10 py-3 rounded-lg text-white">
              Criar conta
            </Button>
          </Link>
          <h2 className="font-bold">OU</h2>
          <Link href="/login">
            <Button className="bg-[#2298cf] outline outline-[#2298cf] hover:outline-offset-4 hover:bg-[#2298cf]/40 hover:text-[#2298cf] hover:font-semibold px-10 py-3 rounded-lg text-white">
              Entrar
            </Button>
          </Link>
        </div>
      </main>
    );
  }