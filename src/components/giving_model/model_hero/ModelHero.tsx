import Link from "next/link";
import "./ModelHero.css";

export default function ModelHero() {
  return (
    <div className="model-hero hero-image">
      <div className="model-hero__text">
        <h1 className="model-hero__title title-font-size">Our Giving Model</h1>
        <Link className="model-hero__link" href="/">Donate</Link>
      </div>
    </div>
  );
}
