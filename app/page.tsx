import NavbarOrganism from "@/shared/components/organisms/navbar/navbar.organism";

export default function Home() {
  return (
    <div className={""}>
      <NavbarOrganism />
      <main className={""}>
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
      </main>
    </div>
  );
}
