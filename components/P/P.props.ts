import { DetailedHTMLProps, ReactNode } from "react";

export interface PProps extends DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> {
  size?: "s" | "m" | "l";
  children: ReactNode;
}
