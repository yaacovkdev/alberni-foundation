import Image from "next/image";
import "./GrantsBenefits.css";
import benefitsImage from "@/images/placeholder-image-announcement.jpg";

export default function GrantsBenefits() {
  return (
    <section id="grantsBenefits" className="grants-benefits">
      <div className="grants-benefits__context">
        <div className="grants-benefits__part grants-benefits__part--first">
          <h2 className="header-font-size">Who Benefits?</h2>

          <div className="grants-benefits__leaf">
            <h3 className="subheader-font-size">The Community</h3>
            <p className="normal-font-size sans-font">
              Organizations apply for grants to help fund local projects. The
              Foundation has established broad and flexible criteria, enabling
              it to support innovative activities.
            </p>
          </div>
        </div>

        <div className="grants-benefits__part grants-benefits__part--second">
          <Image
            className="grants-benefits__image"
            src={benefitsImage}
            alt="Donors Image"
            width={580}
            height={435}
          />
        </div>
      </div>


      <div className="grants-benefits__context">
        <div className="grants-benefits__part grants-benefits__part--third">
          <Image
            className="grants-benefits__image"
            src={benefitsImage}
            alt="Donors Image"
            width={580}
            height={435}
          />
        </div>

        <div className="grants-benefits__part grants-benefits__part--fourth">
          <div className="grants-benefits__leaf">
            <h3 className="subheader-font-size">The Donors</h3>
            <p className="normal-font-size sans-font">
              People want to be sure their charitable dollars are used wisely,
              where it can do the most good. Donors may choose to support a
              favourite cause or they may ask the Foundation to distribute the
              income from the invested funds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
