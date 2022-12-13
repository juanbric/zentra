import { link } from "fs";
import Link from "next/link";

export const BotonLink = ({
  link,
  mensaje,
}: {
  link: string;
  mensaje: string;
}) => {
  return (
    <Link
      href={link}
      className="px-4 py-2 bg-[#1d1d1d] text-white copy rounded-[8px]"
    >
      {mensaje}
    </Link>
  );
};

export default BotonLink;
