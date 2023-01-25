import MetaTag from "../components/MetaTag";
import { createClient } from "contentful";
import BlogCard from "../components/BlogCard";
import Link from "next/link";
import { URL } from "../config";
import Schema from "../components/Schema";

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
      revalidate: 10,
    },
  };
}

export const Blog = ({ blogs }: { blogs: any }) => {
  const imageMeta = "https://i.ibb.co/1sJSnJN/zentra.png";
  const description =
    "Lleva tu negocio al siguiente nivel con nuestra agencia de desarrollo web en Las Palmas de Gran Canaria. Especialistas en crear soluciones personalizadas para impulsar tu crecimiento digital. ";
  const title = "Transformación digital | Blog de zentradev";
  const date = new Date();

  return (
    <>
      <Schema
        title={title}
        date={date}
        image={imageMeta}
        articleBody={undefined}
        description={description}
      />
      <MetaTag
        title={title}
        description={description}
        url={URL}
        image={imageMeta}
      />
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">

        <section className="flex flex-col-reverse md:grid md:grid-cols-2 py-[82px] md:py-[158px] items-center justify-center gap-14">
            <div className="">
              <div className="huge-title mb-4">Blog</div>
              <div className="sub-title mb-2">Experiencias de navegación web para un mundo cambiante</div>
            </div>
            <div className="self-start md:self-end">
              <img src="/logo.svg" className="max-w-[381px] h-[381px]" />
            </div>
          </section>

          <div className="md:grid md:grid-cols-3 md:gap-8">
            {blogs?.map((articulo: any) => {
              const { titulo, subTitulo, slug } = articulo?.fields;
              const coverUrl = articulo?.fields.cover.fields.file.url;
              return (
                <Link key={articulo?.sys.id} href={slug}>
                  <BlogCard
                    title={titulo}
                    description={subTitulo}
                    img={coverUrl}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
