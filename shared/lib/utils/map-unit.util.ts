import { ProductType } from "@/modules/products/types/product.type";

export function formatQuantityAvailability(
  quantity: number,
  unit: ProductType["unit"]
): string {
  if (unit === "mL" || unit === "g") {
    return `${quantity}${unit} available`;
  }

  if (unit === "pcs") {
    return quantity === 1 ? `Only 1 piece left` : `Only ${quantity} pcs left`;
  }

  if (unit === "set") {
    return quantity === 1 ? `1 set remaining` : `${quantity} sets remaining`;
  }

  return `${quantity} available`;
}
