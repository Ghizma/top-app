import { AppContext } from "../../context/app.context";
import styles from "./Menu.module.css";
import cn from "classnames";
import { useContext } from "react";
import Link from "next/link";

export const Menu = () => {
  const { menu, setMenu } = useContext(AppContext);
  return (
    <>
      <div>
        <ul>
          {menu.map((m) => {
            return (
              <li className={styles["menu-item"]} key={m.slug}>
                <Link
                  href={`/products/category/${m.slug}`}
                  className={styles.menuItem}
                >
                  {m.slug}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
