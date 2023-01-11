import Link from "next/link";
import Image from "next/image";
import {
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

export const AppBar = () => {
  return (
    <div className=" bg-white border-b-[0.00001px] border-[#dfd3dc] py-1 lg:py-2">
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <div className="flex justify-between items-center">
            <div>
              <Link href={"/"}>
                <HStack>
                  <div className="rounded-full p-3 bg-azul" />
                  <p className="header-small-bold verde">zentradev</p>
                </HStack>
              </Link>
            </div>
            <div className="hidden lg:block header-tiny-bold verde">
              <Link href={"/nosotros"}>Sobre nosotros</Link>
              <Link href={"/servicios"}>Nuestros servicios</Link>
              <Link href={"/blog"}>Blog</Link>
              <Link href={"/presentanos-tu-proyecto"}>
                Peséntanos tu proyecto
              </Link>
              <Link href={"/contacto"}>Contacto</Link>
            </div>
            <div className="lg:hidden block">
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
                <MenuList style={{ width: "100px" }}>
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
                    <Link href={"/presentanos-tu-proyecto"}>
                      Peséntanos tu proyecto
                    </Link>
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
    </div>
  );
};

export default AppBar;
