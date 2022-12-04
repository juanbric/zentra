import Head from "next/head";
import MetaTag from "../components/MetaTag";
import Spacer from "../components/Spacer";

export default function Home() {
  return (
    <>
      <MetaTag
        title={
          "Zentra Dev | Agencia de Desarrollo Web | Aumenta tus conversiones"
        }
        description={
          "Si buscas vender más, convertir mejor, y posicionarte más rápido, desarrolla tu presencia web con Zentra para conseguir los resultados que siempre soñaste."
        }
        url={undefined}
        image={undefined}
      />
      <main className="main">
        <h1 className="title">Zentra Dev</h1>

        <p className="description text-center">Agencia de Desarrollo Web</p>

        <div className="grid-perfect">
          <p className="card-next">
            La agencia de desarrollo web que crea páginas corporativas y tiendas
            online rápidas, bonitas, usables y que te hacen vender como ninguna.
          </p>
          <p className="card-next">
            Si buscas vender más, convertir mejor, y posicionarte más rápido,
            desarrolla tu presencia web con Zentra Dev para conseguir
            resultados.
          </p>

          <form className="card-next text-center">
            <h3>Contáctanos</h3>
            <h1 className="text-2xl font-bold dark:text-gray-50">
              ¡Podemos ayudarte!
            </h1>
            <Spacer size={8} />
            <p>
              Nos encantan los desafíos y trabajamos con gusto para ayudarte a
              sacar provecho de la tecnología.
            </p>
            {/* <HStack> */}
              <label
                htmlFor="fullname"
                className="text-gray-500 font-light mt-8 dark:text-gray-50"
              >
                Tu nombre
                <span className="text-red-500 dark:text-gray-50">*</span>
              </label>
              <input
                type="text"
                name="fullname"
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
              />
            {/* </HStack> */}
            <label
              htmlFor="email"
              className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
              Tu correo electrónico<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />

            <label
              htmlFor="subject"
              className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
              Asunto<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />

            <label
              htmlFor="message"
              className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
              Tu mensaje<span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            ></textarea>
            <div className="flex flex-row items-center justify-start">
              <button className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
                Send
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-cyan-500 ml-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className="footer">Llámanos +31620717899</footer>
    </>
  );
}
