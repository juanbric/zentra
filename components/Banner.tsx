import Spacer from "./Spacer";

export const Banner = ({img, copy}:{img: string; copy: string}) => {
  return (
    <>
      <img src={img} />
      <p className="header-light text-center">{copy}</p>
      <Spacer size={80} />
    </>
  );
};

export default Banner;
