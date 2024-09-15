import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import GrantsData from "@/data/grants-data";

import "./GrantsApply.css";

export default function GrantsApply() {
  return (
    <article className="grants-apply">
      <section className="grants-apply__application">
        <h2 className="grants-apply__header header-font-size">Apply</h2>

        <div className="grants-apply__info">
          <div className="grants-apply__guidelines">
            <h3 className="grants-apply__subheader grants-apply__subheader--download subheader-font-size">
              Download Grant Guidelines
            </h3>

            <Link className="grants-apply__link" href="/">
              Grant Guidelines{" "}
              <FontAwesomeIcon className="dwnld-icon" icon={faDownload} />
            </Link>
          </div>
          <div className="grants-apply__guidelines">
            <h3 className="grants-apply__subheader subheader-font-size">
              Attach with your application
            </h3>
            <p className="grants-apply__list normal-font-size sans-font">
              1. Most recent Annual Report
              <br />
              2. Financial statement
            </p>
          </div>
          <div className="grants-apply__guidelines">
            <h3 className="grants-apply__subheader subheader-font-size">
              Submit by February 28
            </h3>
            <p className="grants-apply__list normal-font-size sans-font">
              The Alberni Valley Community Foundation, c/o Echo Centre 4255
              Wallace St, Port Alberni V9Y 3Y8
            </p>
          </div>
        </div>
      </section>

      <section className="grants-apply__lists">
        <div className="grants-apply__list-item">
          <h2 className="header-font-size">Foundation Grants</h2>
          <CategoryFilter />

          {GrantsData.filter((data) => data.foundation === true).map(
            (grant, i) => (
              <div key={i} className="grant-tab">
                <div className="grant-tab__header">
                  <h4 className="grant-tab__category normal-font-size">
                    {grant.category}
                  </h4>
                  <button className="grant-tab__next-btn">
                    <FontAwesomeIcon className="icon-btn" icon={faArrowRight} />
                  </button>
                </div>

                <h3 className="subheader-font-size">{grant.title}</h3>
                <p className="normal-font-size">
                  {grant.description.slice(0, 300)}...
                </p>
              </div>
            )
          )}
        </div>

        <div className="grants-apply__list-item">
          <h2 className="header-font-size">Other Grants</h2>
          <CategoryFilter />

          {GrantsData.filter((data) => data.foundation !== true).map(
            (grant, i) => (
              <div key={i} className="grant-tab grant-tab--other">
                <div className="grant-tab__header">
                  <h4 className="grant-tab__category normal-font-size">
                    {grant.category}
                  </h4>
                  <button className="grant-tab__org-link">
                    Grant Provider Organization{" "}
                    <FontAwesomeIcon
                      className="icon-btn"
                      icon={faArrowUpRightFromSquare}
                    />
                  </button>
                </div>

                <h3 className="subheader-font-size">{grant.title}</h3>
                <p className="normal-font-size">
                  {grant.description.slice(0, 300)}...
                </p>
              </div>
            )
          )}
        </div>
      </section>
    </article>
  );
}

//filter category component
const CategoryFilter: React.FC = () => {
  return (
    <div className="filter-category">
      <h4 className="filter-category__title normal-font-size">
        Filter by category
      </h4>

      <div className="filter-category__buttons">
        <button className="filter-category__btn">
          Arts Culture & Heritage
        </button>
        <button className="filter-category__btn">Education</button>
        <button className="filter-category__btn">
          Health and Physical Activity
        </button>
        <button className="filter-category__btn">Social Services</button>
        <button className="filter-category__btn">Environment</button>
      </div>
    </div>
  );
};
