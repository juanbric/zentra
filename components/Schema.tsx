//@ts-ignore
import { Helmet } from "react-helmet";

const Schema = ({
  title,
  date,
  image,
  articleBody,
  description,
}: {
  title: any;
  date: any;
  image: any;
  articleBody: any;
  description: any;
}) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
            {
              "@context": "http://schema.org",
              "@type": "BlogPosting",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://zentradev.vercel.app/"
              },
              "headline": "${title}",
              "datePublished": "${date}",
              "author": {
                "@type": "Person",
                "name": "Juan Pablo Briceno"
              },
              "image": "${image}",
              "articleBody": "${articleBody}",
              "publisher": {
                "@type": "Organization",
                "name": "zentradev",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://svgshare.com/i/pNR.svg"
                }
              },
              "copyrightYear": 2023,
              "inLanguage": "es-ES",
              "description": "${description}"
            }
          `}
      </script>
    </Helmet>
  );
};

export default Schema;