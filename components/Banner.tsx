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
        <section className="md:h-screen">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="py-[52px] md:py-[128px]">
              <div className="title mb-2">{headerTitle}</div>
              <div className="sub-title mb-6">{headerSubTitle}</div>
              <Link
                className="hover:bg-[#1b1393] bg-blue copy-big text-white py-2 rounded-[6px] px-4"
                href={"/about"}
              >
                Learn more
              </Link>
            </div>
            <div className="pb-[52px] md:py-[128px] md:pb-0">
              <img src="/cover.png" className="rounded-[6px]" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
