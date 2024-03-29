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
    <div className="py-2 md:py-3 bg-first sticky top-0 z-20">
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <div className="flex justify-between items-center">
            <div className="">
              <Link
                className="flex items-center justify-center hover:scale-105 transform-gpu ease-in-out duration-300"
                href={"/"}
              >
                <img src="/logo.svg" className="w-[28px] h-[28px] shadow-xl " />
                <h3 className="ml-2 logo">zentradev</h3>
              </Link>
            </div>

            {/* Grande */}
            <div className="hidden md:flex items-center gap-8">
              <Link href={"/servicios"}>Servicios</Link>
              <Link href={"/blog"}>Blog</Link>
              <Link
                href={"/contacto"}
                className="hover:text-second bg-third hover:bg-second py-2 border-radius px-4"
              >
                Cuéntanos
              </Link>
            </div>

            {/* Pequeno */}
            <div className="md:hidden block">
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={
                    <Image
                      src="/hamburguer.svg"
                      width={28}
                      height={28}
                      alt={""}
                    />
                  }
                  variant="black"
                  className="border-radius outline-none"
                />
                <MenuList
                  minW={50}
                  style={{
                    backgroundColor: "#0d0d0d",
                    border: "none",
                    color: "#fffffb",
                  }}
                  className="flex flex-col items-start justify-start p-4"
                >
                  <Link href={"/servicios"}>Servicios</Link>

                  <Link className="py-4" href={"/blog"}>
                    Blog
                  </Link>
                  <Link href={"/contacto"}>Cuéntanos</Link>
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
