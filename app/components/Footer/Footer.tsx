import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <>
      <div className={cn(className, styles.footer)} {...props}>
        <div>Topart @ {format(new Date(), "yyyy")} All rights reserved</div>
        <a href="#" target="blank">
          User Agreement
        </a>
        <a href="#" target="blank">
          Privacy Policy
        </a>
      </div>
    </>
  );
};
