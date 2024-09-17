import Image from "next/image";
import Link from "next/link";
import grantImg from "../../../images/placeholder-image-annual_grants.jpg";

import "./AvailableGrants.css";

export default function AvailableGrants() {
  return (
    <div className="avaliable-grants">
      <Image
        className="avaliable-grants__image"
        src={grantImg}
        width="580"
        height="435"
        alt="grants image"
      />

      <div className="avaliable-grants__text">
        <h2 className="header-font-size">
          Community Foundations - a Unique Concept
        </h2>
        <p className="avaliable-grants__paragraph normal-sans-font-size sans-font">
          A Community Foundation is a pool of charitable donations. This pool is
          invested and the interest earned is distributed to local charitable
          organizations. The principal is not touched, so the donations continue
          to grow, generating income to meet local needs for many years to come.
        </p>
        <Link className="avaliable-grants__link" href="/grants">
          View Available Grants
        </Link>
      </div>
    </div>
  );
}
