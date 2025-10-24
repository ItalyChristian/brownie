import Image from "next/image";
import Brownie from "../src/assets/images/brownie.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2 bg-emerald-900">
      <header>
        <h1 className="font-extrabold text-3xl">Brownie</h1>
      </header>
      <main
        style={{ width: "50vw", height: "60vh" }}
        className="flex items-center justify-center bg-emerald-100"
      >
        <Image
          src={Brownie}
          alt="brownie"
          style={{ width: "100%", height: "100%" }}
        />
      </main>
      <a
        href="mailto:"
        aria-label="enviar email"
        className="text-slate-500 font-extrabold"
      >
        Brownie
      </a>
    </div>
  );
}
