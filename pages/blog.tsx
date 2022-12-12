import MetaTag from "../components/MetaTag";
import { createClient } from "contentful";
import Spacer from "../components/Spacer";
import BlogCard from "../components/BlogCard";

export async function getStaticProps() {
  const client = createClient({
    //@ts-ignore
    space: process.env.CONTENTFUL_SPACE_ID,
    //@ts-ignore
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      blogs: res.items,
    },
  };
}

export const Blog = ({ blogs }: { blogs: any }) => {
  console.log("blogs", blogs);
  return (
    <>
      <MetaTag
        title={"Sobre nosotros | Zentra Dev"}
        description={
          "ofrecemos una amplia gama de servicios a nuestros clientes. Desde diseño y desarrollo de sitios web personalizados hasta soluciones de comercio electrónico, estamos equipados para manejar todas sus necesidades de tecnología de la información."
        }
        url={undefined}
        image={"/logo.png"}
      />
      {blogs?.map((articulo: any) => {
        const titulo = articulo?.fields.titulo;
        const subTitulo = articulo?.fields.subTitulo;
        const coverUrl = articulo?.fields.cover.fields.file.url;
        return (
          <BlogCard
            key={articulo?.sys.id}
            title={titulo}
            subTitle={subTitulo}
            coverUrl={coverUrl}
          />
        );
      })}

      {/* <h1 className="header-bold">
            5 razones por las que su empresa necesita un sitio web profesional
          </h1>
          <p className="header-light">
            En la era digital actual, tener un sitio web es fundamental para
            cualquier empresa. No importa el tamaño o el sector en el que se
            encuentre, un sitio web profesional puede ser una herramienta
            poderosa para impulsar su negocio y atraer a nuevos clientes. Aquí
            presentamos cinco razones por las que su empresa necesita un sitio
            web profesional:{" "}
          </p>
          <p>
            1: Mejorar su presencia en línea. Un sitio web profesional le
            permite mostrar su marca y su mensaje de manera clara y consistente.
            Además, le da a su empresa una presencia en línea sólida y confiable
            que puede ayudar a mejorar su reputación en línea. <br />
            <br />
            2: Atraer a nuevos clientes. Un sitio web profesional puede ayudar a
            atraer a nuevos clientes a su empresa. Un diseño atractivo y fácil
            de usar puede generar interés y confianza en su marca, lo que puede
            impulsar a los usuarios a contactar a su empresa o comprar sus
            productos o servicios.
            <br />
            <br />
            3: Ampliar su alcance. Un sitio web le permite llegar a clientes
            potenciales que de otra manera no conocerían su empresa. Además, un
            sitio web bien diseñado y optimizado para motores de búsqueda puede
            mejorar su visibilidad en línea y aumentar su alcance. <br />
            <br />
            4: Mejorar la comunicación con sus clientes. Un sitio web
            profesional le permite compartir información relevante con sus
            clientes de manera rápida y fácil. Puede utilizar su sitio web para
            publicar noticias, eventos y ofertas especiales, así como para
            recibir comentarios y preguntas de sus clientes. <br />
            <br />
            5: Mejorar la eficiencia de su empresa. Un sitio web profesional
            puede ayudar a automatizar y simplificar muchos de los procesos de
            su empresa. Por ejemplo, puede utilizar su sitio web para recibir
            pedidos en línea, programar citas y proporcionar acceso a recursos y
            herramientas para sus clientes. <br />
            <br />
            En resumen, un sitio web profesional puede ser una valiosa
            herramienta para impulsar su negocio y mejorar su presencia en
            línea. Si aún no tiene un sitio web o si su sitio web actual no
            cumple con sus necesidades, no dude en contactar a Zentra Dev para
            cumplir sus deseos.
          </p> */}
    </>
  );
};
export default Blog;
