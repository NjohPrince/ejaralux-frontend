import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";

import classes from "./page.module.css";

import NavbarOrganism from "@/shared/components/organisms/navbar/navbar.organism";
import ButtonAtom from "@/shared/components/atoms/button/button.atom";
import SparkleIcon from "@/shared/components/icons/sparkle.icon";
import StarIcon from "@/shared/components/icons/star.icon";

/**
 * The Home component serves as the main landing page of the application.
 * It includes a navigation bar and a hero section that highlights the
 * brand's luxury skincare offerings with a 100% natural claim.
 * The hero section displays a series of star icons, a promotional note,
 * a headline, a descriptive paragraph, and a call-to-action button to browse products.
 * An image is also featured to visually represent the brand's essence.
 *
 * @returns {JSX.Element} The Home component JSX element.
 */
export default function Home(): JSX.Element {
  return (
    <div className={classes.home}>
      <NavbarOrganism />
      <main className={`${classes.hero} flex col`}>
        <div className={`flex col gap-32`}>
          <div className={`flex col gap-16`}>
            <div className={`flex gap-12`}>
              <div className={`flex a-center gap-4`}>
                <StarIcon color="var(--dark-color)" size="20" />
                <StarIcon color="var(--dark-color)" size="20" />
                <StarIcon color="var(--dark-color)" size="20" />
                <StarIcon color="var(--dark-color)" size="20" />
                <StarIcon color="var(--dark-color)" size="20" />
              </div>
              <span className={`${classes.note}`}>🌿 100% Natural</span>
            </div>
            <h1>Luxury Skin, Timeless Glow.</h1>
            <p>
              Discover high-performance skincare for the glow that never fades.
              Because your skin deserves the very best.
            </p>
          </div>
          <div>
            <Link href={"/products"} className={`${classes.navbar__link}`}>
              <ButtonAtom
                label="Browse Products"
                ariaLabel="Browse products"
                iconLeft={<SparkleIcon size="20" />}
              />
            </Link>
          </div>
        </div>

        <div className={`${classes.image}`}>
          <Image
            src={"/images/beauty.jpg"}
            alt="beauty"
            width={600}
            height={600}
          />
        </div>
      </main>
    </div>
  );
}
