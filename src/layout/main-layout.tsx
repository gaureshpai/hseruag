import type { ReactNode } from "react";
import Link from "next/link";
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
        <div className="bg-slate-900 px-4 py-3 text-center text-sm text-slate-100">
          <p>
            This old website was not updated since April 1, 2026. Visit the new
            portfolio site:{" "}
            <Link
              href="/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline underline-offset-2 transition hover:text-sky-300"
            >
              gauresh.is-a.dev
            </Link>
          </p>
        </div>
        <Navbar />
        <main>{props.children}</main>
      </div>
      <Footer />
    </>
  );
}
