import { CategoryType } from "@/modules/products/types/category.type";

export type CategoryGroupProps = {
  idx?: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  cats?: CategoryType[];
};
