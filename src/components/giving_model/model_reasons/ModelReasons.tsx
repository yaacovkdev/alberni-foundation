import Link from "next/link";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ModelReasons.css";

export default function ModelReasons() {
  return (
    <>
      <article className="model-reasons">
        <div className="model-reasons__header">
          <h2 className="header-font-size">So Many Reasons to Give</h2>
          <p className="normal-sans-font-size sans-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna.
          </p>
        </div>

        <div className="model-reasons__tree">
          <div className="model-reasons__branch model-reasons__branch--left">
            <div className="model-reasons__leaf model-reasons__leaf--first">
              <p className="normal-sans-font-size sans-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi.
              </p>
            </div>
            <div className="model-reasons__leaf">
              <p className="normal-sans-font-size sans-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi.
              </p>
            </div>
            <div className="model-reasons__leaf model-reasons__leaf--empty" />
          </div>

          <div className="model-reasons__branch model-reasons__branch--right">
            <div className="model-reasons__leaf">
              <p className="normal-sans-font-size sans-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna.
              </p>
            </div>
            <div className="model-reasons__leaf">
              <p className="normal-sans-font-size sans-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna.
              </p>
            </div>
            <div className="model-reasons__leaf">
              <p className="normal-sans-font-size sans-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna.
              </p>
            </div>
          </div>
        </div>
      </article>

      <section id="donations" className="donations">
        <div className="donations-top">
          <div className="donations-top__header">
            <h2 className="donations-top__title header-font-size">
              Ways to Give
            </h2>
            <p className="normal-sans-font-size sans-font">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus.
            </p>
          </div>
        </div>

        <div className="donations-list">
          <h3 className="donations-list__title subheader-font-size">I want to...</h3>

          <div className="donations-list__options">
            <div className="donations-list__link-content">
              <Link className="donations-list__link" href="/">
                <p className="normal-font-size">Give with my family</p>
                <FontAwesomeIcon className="down-icon" icon={faArrowDown} />
              </Link>
            </div>

            <div className="donations-list__link-content">
              <Link className="donations-list__link" href="/">
                <p className="normal-font-size">Give Anonymously</p>
                <FontAwesomeIcon className="down-icon" icon={faArrowDown} />
              </Link>
            </div>

            <div className="donations-list__link-content">
              <Link className="donations-list__link" href="/">
                <p className="normal-font-size">Memorialize a loved one</p>
                <FontAwesomeIcon className="down-icon" icon={faArrowDown} />
              </Link>
            </div>

            <div className="donations-list__link-content">
              <Link className="donations-list__link" href="/">
                <p className="normal-font-size">Start a fund</p>
                <FontAwesomeIcon className="down-icon" icon={faArrowDown} />
              </Link>
            </div>

            <div className="donations-list__link-content">
              <Link className="donations-list__link" href="/">
                <p className="normal-font-size">Give in my will</p>
                <FontAwesomeIcon className="down-icon" icon={faArrowDown} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
