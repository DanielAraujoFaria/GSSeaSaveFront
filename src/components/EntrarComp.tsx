import Image from "next/image";
import Link from "next/link";
import { Autocomplete, AutocompleteItem, Input } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { Button } from "@nextui-org/button";

 export default function EntrarComp() {
  
    return(
      <main>
        <div className="flex min-h-screen px-52 flex-col items-center gap-8 bg-white/70">
          <Link href="/">
            <h1 className="text-3xl font-extrabold mt-28 text-[#2298cf]">SEA SAVE</h1>
          </Link>
          <h2 className="text-xl">Bem-Vindo!</h2>
          <Link href="/postpage">
          <form action="" className="flex flex-col gap-3 p-6 m-6 rounded-[20px] min-w-[500px]">
            <Input
                key="email"
                label="E-mail ou User"
                name="email"
                className="text-black"
                variant="bordered"
                labelPlacement={"outside"}
            />
            <Input
                key="password"
                label="Senha"
                name="passwrod"
                className="text-black"
                variant="bordered"
                labelPlacement={"outside"}
            />
            </form>
            <Button className="ml-56 bg-[#2298cf] outline outline-[#2298cf] hover:outline-offset-4 hover:bg-[#2298cf]/40 hover:text-[#2298cf] hover:font-semibold px-10 py-3 rounded-lg text-white">
              Entrar
            </Button>
          </Link>
        </div>
      </main>
    )
 }