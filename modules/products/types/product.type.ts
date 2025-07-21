export interface ProductType {
  id: number;
  name: string;
  catId: number;
  price: number;
  image?: string;
  description: string;
  quantity?: number;
  unit?: "mL" | "g" | "pcs" | "set";
}
