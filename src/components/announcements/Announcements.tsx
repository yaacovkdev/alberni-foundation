import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import announcementsData from "@/data/announcements-data";
import latestAnnouncementImage from "@/images/placeholder-image-announcement.jpg";
import Image from "next/image";

import "./Announcements.css";

export default function Announcements() {
  //determines the number of pages to load
  const PAGES = Math.floor(announcementsData.length / 3);

  //not yet functional beyond first render
  const getAnnouncementsPage = (n: number) => {
    const displayAnnouncements = announcementsData.splice(n * 3, n + 3);
    return displayAnnouncements;
  };

  const displayAnnouncements = getAnnouncementsPage(0);

  return (
    <div className="announcements-full">
      <div className="announcements-full__links">
        {displayAnnouncements.map((announcement, index) => (
          <article key={index} className="announcement-article">
            <Image
              className="announcement-article__image"
              src={latestAnnouncementImage}
              alt="announcements"
              width="580"
              height="435"
            />
            <div className="announcement-article__text">
              <h2 className="subheader-font-size">
                Latest {announcement.title}
              </h2>
              <p className="normal-sans-font-size sans-font">
                {announcement.description.slice(0, 155)}...
              </p>
              <div className="announcement-article__footer">
                <h4 className="small-sans-font-size sans-font">
                  {announcement.time}
                </h4>

                <button className="announcement-article__button">
                  <FontAwesomeIcon
                    className="icon-btn"
                    icon={faArrowRight}
                  />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="announcement-full__page-selector">
        <h4 className="previous-page-text previous-page-text--light smaller-font-size">
          Previous Page
        </h4>
        <div className="previous-page-btns">
          {Array.from({ length: PAGES }, (_, i) => (
            <button
              className={
                i === 0
                  ? "page-btn page-btn--selected normal-sans-font-size sans-font"
                  : "page-btn normal-sans-font-size sans-font"
              }
              key={i}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <h4 className="previous-page-text smaller-font-size">Next Page</h4>
      </div>
    </div>
  );
}
