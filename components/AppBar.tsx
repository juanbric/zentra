import Link from "next/link";
import Image from "next/image";

export const AppBar = () => {
  return (
    <div className="appbar gap-8 px-8">
      <Link href={"/"}>
        <Image src="/logo-small.png" width="29" height="29" alt="Zentra logo" />
      </Link>
      <Link href={"/nosotros"}>Sobre nosotros</Link>
      <Link href={"/servicios"}>Nuestros servicios</Link>
      <Link href={"/blog"}>Blog</Link>
    </div>
  );
};
