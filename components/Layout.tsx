import { AppBar } from "./AppBar";
import { Footer } from "./Footer";

export default function Layout({ children }: { children: any }) {
  return (
    <div className="bg-first text-first">
      <AppBar />
      {children}
      <Footer />
    </div>
  );
}
