import { VStack } from "@chakra-ui/react";
import Spacer from "./Spacer";
import Image from "next/image";

export const BlogCard = ({
  title,
  subTitle,
  coverUrl,
}: {
  title: string;
  subTitle: string;
  coverUrl: string;
}) => {
  return (
    <VStack className="bg-[#f5f5f5] rounded-[22px] p-4 max-w-[300px] mb-6 lg:m-8">
      <Image src={"https:" + coverUrl} alt={"Blog Cover"} width="280" height="280" className="rounded-[22px]" />
      <Spacer size={8} />
      <p className="copy-bold">{title}</p>
      <Spacer size={8} />
      <p className="copy">{subTitle}</p>
    </VStack>
  );
};

export default BlogCard;
