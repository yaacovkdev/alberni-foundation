import Image from "next/image";
import Link from "next/link";
import grantImg from "../../../images/placeholder-image-annual_grants.jpg";

import "./AnnualGrants.css";

export default function AnnualGrants() {
    return  (
        <div className="annual-grants">
            <Image className="annual-grants__image" src={grantImg} width="580" height="435" alt="grants image" />
            <div className="annual-grants__text">
                <h2 className="header-font-size">Annual Grants</h2>
                <p className="annual-grants__paragraph normal-font-size sans-font">
                    The Alberni Valley Community Foundation
                    currently makes grants from the
                    Community Fund once a year. To apply
                    for a grant, registered non-profits are
                    invited to submit an expression of interest
                    by February 28th. Qualifying charities will
                    be notified should the Foundation require
                    further information regarding their
                    application.
                </p>
                <Link className="annual-grants__link" href="/grants" >View Available Grants</Link>
            </div>
        </div>
    );
}