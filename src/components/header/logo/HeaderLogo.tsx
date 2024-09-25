import Link from "next/link";
import "./HeaderLogo.css";

export default function HeaderLogo() {
  return (
    <Link href="/" className="header-link">
      <div className="header-link__logo" />
    </Link>
  );
}
