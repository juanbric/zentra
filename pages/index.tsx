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
          <Spacer size={24} />
          <ContactForm />
        </div>
      </main>

      <footer className="footer">Llámanos +31620717899</footer>
    </>
  );
}
