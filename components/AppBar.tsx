import Link from "next/link";
import Image from "next/image";

export const AppBar = () => {
  return (
    <div className="appbar gap-4 px-8">
      <Link href={"/"}>
        Inicio
      </Link>
      <Link href={"/nosotros"}>
        Sobre nosotros
      </Link>
      <Link href={"/servicios"}>Nuestros servicios</Link>
      <Link href={"/blog"}>Blog</Link>
    </div>
  );
};
