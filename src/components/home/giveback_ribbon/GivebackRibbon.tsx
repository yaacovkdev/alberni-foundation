import "./GivebackRibbon.css"
import Link from "next/link";

export default function GivebackRibbon() {
    return(
        <div className="giveback-ribbon">
            <div className="giveback-ribbon__blocks">
                <div className="dollarsign-block">
                    <div className="dollarsign-block__content">
                        <h2 className="header-font-size">$27K</h2>
                        <p className="normal-sans-font-size sans-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="dollarsign-block dollarsign-block--middle">
                    <div className="dollarsign-block__content">
                        <h2 className="header-font-size">$27K</h2>
                        <p className="normal-sans-font-size sans-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="dollarsign-block">
                    <div className="dollarsign-block__content">
                        <h2 className="header-font-size">$27K</h2>
                        <p className="normal-sans-font-size sans-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div className="giveback-ribbon__footer">
                <p>Want to give back to the community?</p>
                <Link className="giveback-ribbon__support-btn" href="/giving#donations">Support Us</Link>
            </div>


        </div>
    );
}