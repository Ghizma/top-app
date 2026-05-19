import { ReactNode } from "react";
import { Category } from "@/interfaces/category.interface";

export interface LayoutCompProps {
  children: ReactNode;
  category: Category[];
}
