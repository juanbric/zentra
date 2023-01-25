import Link from "next/link";

const BannerServicios = () => {
  return (
    <>
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <div className="py-8">
            <p className="max-w-[300px] huge-title slide-in-left-utility">
              El modelo zentradev.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="relative z-0">
          <img src="/servicios.png" className="w-auto md:w-[1000px] opacity-50" />
        </div>
        <div className="absolute left-[23px] lg:left-[800px] mt-12 md:mt-[80px] z-10">
          <div className="border w-1/2 mb-4 mt-12" />
          <p className="copy-huge">Qué proponemos</p>
          <h2 className="title mb-6 md:mb-12">
            Agregamos valor aplicando soluciones desde la fiabilidad.
          </h2>
          <Link
            className="sub-title hover:underline hover:text-third "
            href="/contacto.tsx"
          >
            Cuéntanos tu proyecto
          </Link>
        </div>
      </div>
    </>
  );
};

export default BannerServicios;
