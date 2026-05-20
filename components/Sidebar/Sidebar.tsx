import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import { Menu } from "../Menu/Menu";
import Link from "next/link";

export const Sidebar = ({ ...props }: SidebarProps) => {
  return (
    <>
      <div {...props}>
        <h1>
          <Link href={`/`}>Category</Link>
        </h1>
        <ul className={styles.menu}>
          <Menu />
          <h1>
            <Link href={`/uxuielements`}>UxUi Elements</Link>
          </h1>
        </ul>
      </div>
    </>
  );
};
