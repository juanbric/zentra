import { AppBar } from "./AppBar";
import { Footer } from "./Footer";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <AppBar />
      <div className="main">
        <div className="grid-perfect px-8 lg:px-0">{children}</div>
      </div>
      <Footer />
    </>
  );
}
