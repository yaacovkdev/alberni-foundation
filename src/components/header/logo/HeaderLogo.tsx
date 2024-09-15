import Link from "next/link";
import "./HeaderLogo.css";

export default function HeaderLogo() {
  return (
    <Link href="/">
      <div className="header-logo" />
    </Link>
  );
}
