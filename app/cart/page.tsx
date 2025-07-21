import { Metadata } from "next";

import NavbarOrganism from "@/shared/components/organisms/navbar/navbar.organism";
import CartTemplate from "@/modules/cart/components/templates/cart/cart.template";

export const metadata: Metadata = {
  title: "Your Shopping Cart | EJARALUX",
  description:
    "You are just one step away from your dream skincare routine. Review and manage the items in your Ejaralux shopping cart. Secure checkout, fashion, and lifestyle products tailored just for you.",
};

export default function CartPage() {
  return (
    <div className={""}>
      <NavbarOrganism />
      <CartTemplate />
    </div>
  );
}
