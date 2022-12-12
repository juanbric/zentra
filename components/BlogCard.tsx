import { VStack } from "@chakra-ui/react";
import Link from "next/link";
import Spacer from "./Spacer";

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
    <Link href="">
      <VStack className="bg-[#f5f5f5] rounded-[22px] p-4 max-w-[240px]">
        <img src={coverUrl} alt={"Blog Cover"} className="rounded-[22px]" />
        <Spacer size={8} />
        <p className="copy-bold">{title}</p>
        <Spacer size={8} />
        <p className="copy">{subTitle}</p>
      </VStack>
    </Link>
  );
};

export default BlogCard;
