import { Stack } from "@chakra-ui/react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white border-t-[0.1px] border-[#dfd3dc] py-4">
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <Stack
            direction={["column", "row"]}
            spacing={4}
            className="verde flex items-start lg:items-center justify-center"
          >
            <Link href={"/politica-de-privacidad"}>Política de privacidad</Link>
            <Link href={"/terminos-y-condiciones-de-uso"}>
              Términos y condiciones de uso
            </Link>
            <Link href={"/politica-de-cookies"}>Política de cookies</Link>
          </Stack>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
