import HeaderLogo from "../logo/HeaderLogo";
import HeaderNavigation from "../navigation/HeaderNavigation";

import "./HeaderComponent.css";

export default function HeaderComponent() {
  return (
    <div className="header">
      <HeaderLogo />
      <HeaderNavigation />
    </div>  
  );
}
