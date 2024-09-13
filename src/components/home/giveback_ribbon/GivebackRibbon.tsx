import "./GivebackRibbon.css"
import Link from "next/link";

export default function GivebackRibbon() {
    return(
        <div className="giveback-ribbon">
            <div className="giveback-ribbon__blocks">
                <div className="dollarsign-block">
                    <h2>$27K</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="dollarsign-block">
                    <h2>$27K</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="dollarsign-block dollarsign-block--last">
                    <h2>$27K</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="giveback-ribbon__footer">
                <p>Want to give back to the community?</p>
                <Link className="support-btn" href="/donations">Support Us</Link>
            </div>


        </div>
    );
}