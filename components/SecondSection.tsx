const SecondSection = ({
  secondTitle,
  secondSubTitle,
  secondCopy,
}: {
  secondTitle: string;
  secondSubTitle: string;
  secondCopy: string;
}) => {
  return (
    <section className="shadow-x md:h-screen">
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="pt-[52px] pb-8 md:py-[128px]">
              <div className="title text-[#3c31dd] mb-2">{secondTitle}</div>
            </div>
            <div className="pb-[52px] md:py-[128px] md:pb-0">
              <div className="sub-title mb-6">{secondSubTitle}</div>
              <div className="">{secondCopy}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
