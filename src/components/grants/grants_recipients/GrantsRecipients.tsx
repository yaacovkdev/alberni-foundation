import Link from "next/link";
import "./GrantsRecipients.css";
import Image from "next/image";
import ribbonImage from "@/images/placeholder-image-recipients.jpg";

export default function GrantsRecipients() {
  //lets go up to 4k displays
  const RIBBON_WIDTH: number = 4800;
  const IMAGE_WIDTH: number = 160;
  const n: number = Math.round(RIBBON_WIDTH / IMAGE_WIDTH);

  return (
    <section id="grantsRecipients" className="grants-recipients">
      <div className="grants-recipients__header">
        <h2 className="grants-recipients__header-title header-font-size">
          2023 Grant Recipients
        </h2>
        <Link className="grants-recipients__link" href="/">
          2020-2022 Grant Recipient
        </Link>
      </div>

      <div className="grants-recipients__ribbon-container">
        <div className="grants-recipients__ribbon">
          {Array.from({ length: n }).map((_, i) => (
            <Image
              key={i}
              className="grants-recipients__image"
              src={ribbonImage}
              width={580}
              height={435}
              alt="ribbon image"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
