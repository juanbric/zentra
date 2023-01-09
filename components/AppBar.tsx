import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

export const AppBar = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Exo&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className=" bg-white border-b-[0.00001px] border-[#f5f5f5] py-2">
        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
            <div className="flex justify-between items-center">
              <Link href={"/"}>
                <img src="/logo-1.png" width={72} />
              </Link>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={
                    <Image
                      src="/hamburguer.png"
                      width={32}
                      height={32}
                      alt={""}
                    />
                  }
                  variant="white"
                />
                <MenuList className="" style={{width: '100px'}}>
                  <MenuItem>
                    <Link href={"/nosotros"}>Sobre nosotros</Link>
                  </MenuItem>
                  <MenuItem>
                  <Link href={"/servicios"}>Nuestros servicios</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={"/blog"}>Blog</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={"/presentanos-tu-proyecto"}>Peséntanos tu proyecto</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={"/contacto"}>Contacto</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
