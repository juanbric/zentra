import Spacer from "./Spacer";
import { HStack } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export const Banner = ({ copy }: { copy: string }) => {
  return (
    <>
      <div className="lg:w-2/5">
        <div className="md:hidden flex items-center justify-center">
          <Image
            width={270}
            height={270}
            src={`/cover-1.svg`}
            className="rounded-cool flex mb-4"
            alt={""}
          />
        </div>
        <HStack className="header lg:pt-[150px]">
          <div className="rounded-full p-6 mt-1 bg-azul" />
          <div className="verde">zentradev</div>
        </HStack>
        <Spacer size={8} />
        <p className="sub-header-tiny">Elevando presencia online</p>
        <Spacer size={24} />
        <h1 className="copy blue">{copy}</h1>
        <Spacer size={32} />
        <div className="hover:scale-105 transform-gpu ease-in-out duration-300">
        <Link
          href={"/blog"}
          className="bg-gris px-8 py-3 rounded-[18px] text-white header-tiny-bold"
        >
          RESERVA TU CONSULTORÍA GRATUITA
        </Link>
        </div>
      </div>
      <div className="hidden lg:block lg:pl-14 pt-4 lg:w-3/5">
        <div className="grid grid-cols-2">
          <div className="pr-8">
            <Image
              width={270}
              height={270}
              src={`/cover-1.svg`}
              className="max-w-[270px] rounded-cool flex mb-6"
              alt={""}
            />
            <Image
              width={270}
              height={270}
              src={`/cover-3.svg`}
              className="max-w-[270px] rounded-cool flex"
              alt={""}
            />
          </div>
          <div className="pt-[90px]">
            <Image
              width={270}
              height={270}
              src={`/cover-4.svg`}
              className="max-w-[270px] rounded-cool flex shadow-xl mb-6"
              alt={""}
            />
            <Image
              width={270}
              height={270}
              src={`/cover-2.svg`}
              className="max-w-[270px] rounded-cool flex "
              alt={""}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
