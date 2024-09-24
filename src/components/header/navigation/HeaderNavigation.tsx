import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

import "./HeaderNavigation.css";

export default function HeaderNavigation() {
  return (
    <div className="header-navigation">
      <Link
        className="header-navigation__link normal-font-size"
        href="/updates"
      >
        Updates
      </Link>
      <Link className="header-navigation__link normal-font-size" href="/giving">
        Our Giving Model
      </Link>
      <Link
        className="header-navigation__link header-navigation__link--grants normal-font-size"
        href="/grants"
      >
        Grants <FontAwesomeIcon className="grants-down-icon" icon={faSortDown} />
      </Link>
      <Link className="header-navigation__link normal-font-size" href="/vital">
        Vital Signs
      </Link>
      <Link className="header-navigation__link normal-font-size" href="/about">
        About
      </Link>
      <Link
        className="header-navigation__link header-navigation__link--special normal-font-size"
        href="/giving#donations"
      >
        Donate
      </Link>

      <div className="header-navigation__grants-menu">dsads</div>
    </div>
  );
}
