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
    <VStack className="border-2 border-[#f5f5f5] rounded-[22px] p-4 max-w-[300px]">
      <Image src={"https:" + coverUrl} alt={"Blog Cover"} width="280" height="280" className="rounded-[22px]" />
      <Spacer size={2} />
      <p className="copy-bold" style={{alignItems:'start', justifyContent: 'start', textAlign: 'start', display: 'flex'}}>{title}</p>
      <p className="copy">{subTitle}</p>
    </VStack>
  );
};

export default BlogCard;
