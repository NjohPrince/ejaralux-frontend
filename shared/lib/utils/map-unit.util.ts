import { ProductType } from "@/modules/products/types/product.type";

/**
 * Format quantity and unit string for product availability text.
 *
 * @example
 * formatQuantityAvailability(12, "mL") // "12mL available"
 * formatQuantityAvailability(12, "pcs") // "Only 12 pcs left"
 * formatQuantityAvailability(12, "set") // "12 sets remaining"
 * formatQuantityAvailability(12, "foo") // "12 available"
 *
 * @param {number} quantity - Quantity of the product.
 * @param {ProductType["unit"]} unit - Unit of the product quantity.
 * @returns {string} Formatted string of quantity and unit.
 */
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
