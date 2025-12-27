import { Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import { classNames } from "@/utility/classNames";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <div className={classNames("min-h-screen", montserrat.className)}>
        <Navbar />
        <main>{props.children}</main>
      </div>
      <Footer />
    </>
  );
}
