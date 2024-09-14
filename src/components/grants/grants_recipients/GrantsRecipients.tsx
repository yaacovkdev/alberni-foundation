import Link from "next/link"
import "./GrantsRecipients.css"

export default function GrantsRecipients() {
  return (
    <section id="grantsRecipients" className="grants-recipients">
      <div className="grants-recipients__header">
        <h2 className="grants-recipients__header-title header-font-size">2023 Grant Recipients</h2>
        <Link className="grants-recipients__link" href="/">2020-2022 Grant Recipient</Link>
      </div>

      <div className="grants-recipients__ribbon">
        
      </div>

    </section>
  )
}
