
import  Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Lagune Voyages</h1>
      <p>Votre agence de voyage à Abidjan depuis 2015</p>
      <div className="relative w-full h-full">
        <Image src="/thierno.jpg" alt="Plage d’Assinie au coucher du soleil" width={500} height={300} />
      </div>
    </div>
  );
}
