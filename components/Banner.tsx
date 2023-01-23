import Link from "next/link";

const Banner = ({
  headerTitle,
  headerSubTitle,
}: {
  headerTitle: string;
  headerSubTitle: string;
}) => {
  return (
    <div className="lg:flex lg:justify-center lg:items-center">
      <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
        <section className="">
          <div className="md:grid md:grid-cols-2 md:gap-[80px]">
            <div className="py-[52px] md:py-[128px]">
              <div className="title mb-2">{headerTitle}</div>
              <div className="sub-title mb-6">{headerSubTitle}</div>
              <Link
                className="hover:text-[#0d0d0d] bg-[#3c31dd] hover:bg-[#fffffb] py-2 rounded-[6px] px-4"
                href={"/about"}
              >
                Habla con nosotros
              </Link>
            </div>
            <div className="hidden md:mt-0 md:flex pb-[52px] max-w-[381px] md:py-[128px] md:pb-0 relative">
              <img src="/white.png" className="ml-12 rounded-[1000px] max-w-[381px] h-[381px]" />
              <img src="/blue.png" className="rounded-[1000px] w-[381px] h-[381px] z-10 absolute md:top-[77px] md:left-[155px]" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
