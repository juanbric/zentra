import MetaTag from "../../components/MetaTag";
import { createClient } from "contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const client = createClient({
  //@ts-ignore
  space: process.env.CONTENTFUL_SPACE_ID,
  //@ts-ignore
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blog",
  });

  const paths = res.items.map((item: any) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: { params: any }) {
  const { items } = await client.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });

  return {
    props: { blog: items[0] },
  };
}

export const Slug = ({ blog }: { blog: any }) => {
  const { titulo, subTitulo, articulo } = blog.fields;
  const coverUrl = blog.fields.cover.fields.file.url;
  console.log("blog", blog)
  return (
    <article>
      <MetaTag
        title={titulo + "| Zentra Dev"}
        description={subTitulo}
        url={undefined}
        image={"https:" + coverUrl}
      />
      <img
        src={"https:" + coverUrl}
        alt="Cover image"
        className="object-cover h-[300px] w-full rounded-[22px]"
      />
      <h1 className="header-bold mt-8">{titulo}</h1>
      <p className="header-light my-6">{subTitulo}</p>
      <div className="copy">
     {documentToReactComponents(articulo)}
     </div>
    </article>
  );
};

export default Slug;
