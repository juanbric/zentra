import MetaTag from "../components/MetaTag";
import { createClient } from "contentful";
import BlogCard from "../components/BlogCard";
import Link from "next/link";

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
  return (
    <>
      <MetaTag
        title={"Blog | Zentra Dev"}
        description={
          "Ofrecemos una amplia gama de servicios a nuestros clientes. Desde diseño y desarrollo de sitios web personalizados hasta soluciones de comercio electrónico, estamos equipados para manejar todas sus necesidades de tecnología de la información."
        }
        url={undefined}
        image={"https://i.ibb.co/N7zSwSS/logo.png"}
      />
      {blogs?.map((articulo: any) => {
        const { titulo, subTitulo, slug } = articulo?.fields;
        const coverUrl = articulo?.fields.cover.fields.file.url;
        return (
          <Link href={"/blog/" + slug}>
            <BlogCard
              key={articulo?.sys.id}
              title={titulo}
              subTitle={subTitulo}
              coverUrl={coverUrl}
            />
          </Link>
        );
      })}
    </>
  );
};
export default Blog;
