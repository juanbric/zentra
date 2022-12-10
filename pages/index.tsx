import Head from "next/head";
import ContactForm from "../components/ContactForm";
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
        <h1 className="header-bold" style={{fontFamily: 'Exo 2'}}>Zentra Dev</h1>

        <p className="header-light text-center">Agencia de Desarrollo Web</p>

        <div className="grid-perfect">
          <p className="card-next">
            Creamos páginas informativas, corporativas, y tiendas
            online rápidas.<br/><br/>Modernizamos tu web para que incrementes tu capacidad de venta.
          </p>
          <p className="card-next">
            Si buscas vender más, convertir mejor, y posicionarte con más
            eficacia en el mundo online, desarrolla tu presencia web con Zentra
            Dev.<br/><br/>Resultados y satisfacción garantizada.
          </p>
          <Spacer size={24} />
          <ContactForm />
        </div>
      </main>

      <footer className="footer copy"><img src="/whatsapp.svg" className="pr-4 "/>Escríbenos por whatsapp al +31620717899 
         </footer>
    </>
  );
}
