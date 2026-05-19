import { DetailedHTMLProps } from "react";
import { Category } from "@/interfaces/category.interface";

export interface SidebarProps extends DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  category: Category[];
}
