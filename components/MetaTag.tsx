import Head from "next/head";

export const MetaTag = ({
  title,
  description,
  url,
  image,
}: {
  title: any;
  description: any;
  url: any;
  image: any;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <link href="https://fonts.googleapis.com/css?family=Exo&display=swap" rel="stylesheet" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={
          "agencia de desarrollo web, seo, las palmas de gran canaria, digitalización, presencia web, desarrollo software"
        }
      />
      <meta name="distribution" content="Global" />
      <meta name="revisit-after" content="21 days" />
      <meta name="creator" content="Juan Pablo Briceno" />
      <meta name="publisher" content="Zentra Dev" />
      <link rel="icon" href="https://i.postimg.cc/rpCZS13d/logo.png" />
      <meta http-equiv="content-language" content="es" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="classification"
        content="agencia de desarrollo web, seo, las palmas de gran canaria, digitalización, presencia web, desarrollo software"
      />
      <meta name="robots" content="index, follow" />
      <meta name="twitter:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={""} />
      <meta name="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
};
export default MetaTag;
