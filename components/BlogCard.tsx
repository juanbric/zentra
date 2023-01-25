import Spacer from "./Spacer";

const BlogCard = ({
  img,
  title,
  description,
}: {
  img: any;
  title: any;
  description: any;
}) => {
  return (
    <>
      <img
        src={img}
        className=" rounded-[6px] object-cover h-[200px] w-full"
        width={800}
        height={300}
      />
      <h2 className="mb-2 mt-4 text-start">{title}</h2>
      <h3 className="shorten-p sub-copy text-start">{description}</h3>
      <Spacer size={8} />
    </>
  );
};

export default BlogCard;