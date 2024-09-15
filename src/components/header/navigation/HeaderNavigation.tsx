import Link from "next/link";

import "./HeaderNavigation.css";

export default function HeaderNavigation() {
  return (
    <div className="header-navigation">
      <Link className="header-navigation__link normal-font-size" href="/updates">Updates</Link>
      <Link className="header-navigation__link normal-font-size" href="/giving">Our Giving Model</Link>
      <Link className="header-navigation__link normal-font-size" href="/grants">Grants ⏷</Link>
      <Link className="header-navigation__link normal-font-size" href="/vital">Vital Signs</Link>
      <Link className="header-navigation__link normal-font-size" href="/about">About</Link>
      <Link className="header-navigation__link header-navigation__link--special" href="/giving">Donations</Link>
    </div>
  )
}
