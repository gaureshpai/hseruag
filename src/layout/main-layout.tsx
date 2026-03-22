import type { ReactNode } from "react";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import { classNames } from "@/utility/classNames";

export interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <div className={classNames("min-h-screen", "font-sans")}>
        <Navbar />
        <main>{props.children}</main>
      </div>
      <Footer />
    </>
  );
}