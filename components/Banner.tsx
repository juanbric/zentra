import Spacer from "./Spacer";

export const Banner = () => {
  return (
    <>
      {/* <img src="/logo.png" /> */}
      <h1 className="header-bold text-center">Zentra Dev</h1>
      <Spacer size={8} />
      <p className="header-light text-center">Agencia de Desarrollo Web</p>
      <Spacer size={24} />
    </>
  );
};

export default Banner;
