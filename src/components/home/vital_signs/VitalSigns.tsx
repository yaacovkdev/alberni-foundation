import "./VitalSigns.css";
import Link from "next/link";

export default function VitalSigns() {
    return (
        <div className="vital-signs">
            <h2 className="header-font-size">Vital Signs Out Now</h2>
            <p className="vital-signs__text normal-font-size sans-font">Thanks to a generous bequest from an anonymous donor, The
                Alberni Valley Community Foundation is proud to publish its
                2023 Vital Signs report.
            </p>
            <Link className="vital-signs__link" href="/vital">Read Vital Signs 2023</Link>
        </div>
    );
}