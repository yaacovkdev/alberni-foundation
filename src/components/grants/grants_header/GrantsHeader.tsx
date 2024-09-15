import Link from "next/link"
import "./GrantsHeader.css"

export default function GrantsHeader() {
  return (
    <div className="grants-header">
      <div className="grants-header__title">
        <h1 className="grants-header__title title-font-size">Grants</h1>
        <Link className="grants-header__link" href="/">Jump to Apply</Link>
      </div>

      <div className="grants-header__leaves">
        <div className="grants-header__leaf grants-header__leaf--left" />
        <div className="grants-header__leaf grants-header__leaf--right" />
      </div>
    </div>
  )
}
