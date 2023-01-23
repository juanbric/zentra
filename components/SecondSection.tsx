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
    <section className="md:h-screen">
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="pt-[52px] pb-8 md:py-[128px]">
              <div className="title mb-2 slide-in-left-utility">{secondTitle}</div>
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
