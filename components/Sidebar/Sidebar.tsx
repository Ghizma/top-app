import { SidebarProps } from "./Sidebar.props";
import Link from "next/link";
import styles from "./Sidebar.module.css";
import cn from "classnames";

export const Sidebar = ({ category, ...props }: SidebarProps) => {
  return (
    <>
      <div {...props}>
        <h1>Category</h1>
        <ul>
          {category?.map((el) => (
            <li key={el.slug}>
              <Link href={`/products/category/${el.slug}`}>{el.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
