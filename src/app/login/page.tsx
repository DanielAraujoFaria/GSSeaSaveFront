import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Autocomplete, AutocompleteItem, Input } from "@nextui-org/react";
import { useFormState } from "react-dom";
import EntrarComp from "@/components/EntrarComp";

const initialState = {
    messageNome: '',
}   

export default function Login(){

    return(
        <main className="flex flex-row bg-cover bg-[url('../../public/nemo.jpg')]">
            <div className="mx-96"><EntrarComp /></div>
        </main>
    )
}