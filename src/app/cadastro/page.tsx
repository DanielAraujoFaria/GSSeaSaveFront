import Link from "next/link";
import { Button } from "@nextui-org/button";
import CadastroComp from "@/components/CadastroComp";

export default function Cadastro(){
    return(
        <main className="flex flex-row gap-20 bg-cover bg-[url('../../public/CLOWN.jpg')]">
            <div className="mx-96"><CadastroComp /></div>
        </main>
    )
}