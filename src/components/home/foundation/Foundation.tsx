import Announcements from "@/data/announcements";
import Link from "next/link";

import "./Foundation.css";

export default function Foundation() {
    return (
        <div className="foundation">
            <div className="foundation__text">
                <h2 className="foundation__title header-font-size">The Alberni Valley Community Foundation</h2>
                <p className="foundation__description normal-font-size">Our Foundation is registered with the Canada Customs and Revenue Agency.
                    It is governed by an appointed Board of Volunteers, who are knowledgeable about local
                    needs and recognized for their financial stewardship and community leadership.
                    Assets will grow each year and the Foundation is then able to support local organizations
                    serving youth, seniors, health, arts and culture as well as education, recreation and the
                    environment within the Alberni Valley.</p>
            </div>
            <div className="foundation__bar">
                <h3 className="subheader-font-size">Latest Announcements</h3>

                <div className="announcements-bar-content announcements-bar-content--first">
                    <h4 className="announcements-bar-content__title normal-font-size">{Announcements[0].title}</h4>
                    <p className="announcements-bar-content__description small-font-size">{Announcements[0].description.split(" ").slice(0, 12).join(" ")}</p>
                    <h5 className="announcements-bar-content__time smaller-font-size">{Announcements[0].time}</h5>
                </div>

                <div className="announcements-bar-content">
                    <h4 className="announcements-bar-content__title normal-font-size">{Announcements[0].title}</h4>
                    <p className="announcements-bar-content__description small-font-size">{Announcements[0].description.split(" ").slice(0, 12).join(" ")}</p>
                    <h5 className="announcements-bar-content__time smaller-font-size">{Announcements[0].time}</h5>
                </div>

                <Link className="foundation__more-btn smaller-font-size" href="/updates">View more</Link>
            </div>
        </div>
    );
}