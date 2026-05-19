import { LayoutCompProps } from "./LayoutComp.props";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./LayoutComp.module.css";
import { FunctionComponent } from "react";

import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { Category } from "@/interfaces/category.interface";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "My Firs Next.js App",
  description: "It is my first Next.js app.",
};

const LayoutComp = ({ children, category }: LayoutCompProps) => {
  return (
    <div className={styles.wraper}>
      <Header className={styles.header} />

      <Sidebar category={category} className={styles.sidebar} />
      <div className={styles.body}>{children}</div>

      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends { category: Category[] }>(
  Component: FunctionComponent<T>,
) => {
  return function withLayoutComponent({ ...props }: T) {
    return (
      <html lang="en" className={`${notoSans.variable} h-full antialiased`}>
        <body className="min-h-full">
          <LayoutComp category={props.category}>
            <Component {...props} />
          </LayoutComp>
        </body>
      </html>
    );
  };
};
