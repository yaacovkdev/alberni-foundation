import "./VitalPreview.css";
import Link from "next/link";

export default function VitalPreview() {
    return (
        <div className="vital-preview">
            <h2 className="header-font-size">Vital Signs Out Now</h2>
            <p className="vital-preview__text normal-sans-font-size sans-font">Thanks to a generous bequest from an anonymous donor, The
                Alberni Valley Community Foundation is proud to publish its
                2023 Vital Signs report.
            </p>
            <Link className="vital-preview__link normal-font-size" href="/vital">Read Vital Signs 2023</Link>
        </div>
    );
}