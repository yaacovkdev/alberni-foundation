import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import Link from "next/link";

import "./AnnualReports.css";

export default function AnnualReports() {
  return (
    <section className="reports">
      <h2 className="reports__title header-font-size">Annual Reports</h2>
      <div className="annual-reports">
        <div className="annual-reports__title">
          <div className="annual-reports__image" />
        </div>
        <div className="annual-reports__bar">
          <h3 className="subheader-font-size">Previous Annual Reports</h3>

          <div className="annual-reports__link">
            <Link href="/">2022</Link>
            <FontAwesomeIcon
              className="annual-reports__icon-link"
              icon={faArrowUpRightFromSquare}
            />
          </div>

          <div className="annual-reports__link annual-reports__link--middle">
            <Link href="/">2021</Link>
            <FontAwesomeIcon
              className="annual-reports__icon-link"
              icon={faArrowUpRightFromSquare}
            />
          </div>

          <div className="annual-reports__link">
            <Link href="/">2020</Link>
            <FontAwesomeIcon
              className="annual-reports__icon-link"
              icon={faArrowUpRightFromSquare}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
