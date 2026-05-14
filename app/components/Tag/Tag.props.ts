import { DetailedHTMLProps, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  size?: "s" | "m";
  children: ReactNode;
  color?: "ghost" | "red" | "grey" | "green" | "primary";
  href?: string;
}
