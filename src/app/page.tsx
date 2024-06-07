import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import HomeNav from "@/components/HomeNav";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <main className="flex flex-row gap-20 bg-cover bg-[url('../../public/OCEAN.jpg')]">
      <HomeNav />
      <Sobre />
    </main>
  );
}
