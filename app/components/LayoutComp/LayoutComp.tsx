import { LayoutCompProps } from "./LayoutComp.props";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./LayoutComp.module.css";
import cn from "classnames";
import { Component, FunctionComponent } from "react";

const LayoutComp = ({ children }: LayoutCompProps) => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>,
) => {
  return function withLayoutComponent({ ...props }: T) {
    return (
      <LayoutComp>
        <Component {...props} />
      </LayoutComp>
    );
  };
};
