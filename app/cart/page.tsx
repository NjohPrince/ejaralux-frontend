import { Metadata } from "next";
import { JSX } from "react";

import NavbarOrganism from "@/shared/components/organisms/navbar/navbar.organism";
import CartTemplate from "@/modules/cart/components/templates/cart/cart.template";

export const metadata: Metadata = {
  title: "Your Shopping Cart | EJARALUX",
  description:
    "You are just one step away from your dream skincare routine. Review and manage the items in your Ejaralux shopping cart. Secure checkout, fashion, and lifestyle products tailored just for you.",
};

/**
 * The CartPage component renders the main cart page.
 *
 * It displays the navigation bar and the CartTemplate component.
 *
 * @returns {JSX.Element} The cart page component.
 */
export default function CartPage(): JSX.Element {
  return (
    <div className={""}>
      <NavbarOrganism />
      <CartTemplate />
    </div>
  );
}
