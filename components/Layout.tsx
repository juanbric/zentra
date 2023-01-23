import { AppBar } from "./AppBar";
import { Footer } from "./Footer";

export default function Layout({ children }: { children: any }) {
  return (
      <div className="bg-[#0d0d0d] text-[#fffffb]">
        <AppBar />
        {children}
        <Footer />
      </div>
  );
}
