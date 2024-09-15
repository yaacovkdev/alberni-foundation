import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import Link from "next/link";

import "./VitalSigns.css";

export default function VitalSigns() {
  return (
    <div className="vital-signs">
      <div className="vital-signs__title">
        <h2 className="header-font-size">Latest Vital Signs Report</h2>
        <div className="vital-signs__image">
          <div className="vital-signs__image-link">
            <FontAwesomeIcon
              className="vital-signs__icon-link"
              icon={faArrowUpRightFromSquare}
            />
          </div>
        </div>
      </div>
      <div className="vital-signs__bar">
        <h3 className="subheader-font-size">Previous Vital Signs</h3>

        <div className="vital-signs__link">
            <Link href="/">2022 Vital Signs</Link>
            <FontAwesomeIcon
              className="vital-signs__icon-link"
              icon={faArrowUpRightFromSquare}
            />
        </div>

        <div className="vital-signs__link vital-signs__link--middle">
            <Link href="/">2022 Vital Signs</Link>
            <FontAwesomeIcon
              className="vital-signs__icon-link"
              icon={faArrowUpRightFromSquare}
            />
        </div>

        <div className="vital-signs__link">
            <Link href="/">2022 Vital Signs</Link>
            <FontAwesomeIcon
              className="vital-signs__icon-link"
              icon={faArrowUpRightFromSquare}
            />
        </div>
      </div>
    </div>
  );
}
