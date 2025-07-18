import Link from "next/link";

import classes from "./page.module.css";

import NavbarOrganism from "@/shared/components/organisms/navbar/navbar.organism";
import ButtonAtom from "@/shared/components/atoms/button/button.atom";
import SparkleIcon from "@/shared/components/icons/sparkle.icon";
import Image from "next/image";

export default function Home() {
  return (
    <div className={classes.home}>
      <NavbarOrganism />
      <main className={`${classes.hero} flex col`}>
        <div className={`flex col gap-32`}>
          <div className={`flex col gap-16`}>
            <h1
              style={{
                fontFamily: "var(--font-primary)",
                fontSize: "6.4rem",
                textTransform: "uppercase",
              }}
            >
              Luxury Skin, Timeless Glow.
            </h1>
            <p>
              Discover high-performance skincare for the glow that never fades.
              Because your skin deserves the very best.
            </p>
          </div>
          <div>
            <Link href={"/products"} className={`${classes.navbar__link}`}>
              <ButtonAtom
                label="Browse Products"
                iconLeft={<SparkleIcon size="20" />}
              />
            </Link>
          </div>
        </div>

        <div className={`${classes.image}`}>
          <Image
            src={"/images/beauty.jpg"}
            alt="hero"
            width={600}
            height={600}
          />
        </div>
      </main>
    </div>
  );
}
