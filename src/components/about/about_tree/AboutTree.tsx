import "./AboutTree.css";

export default function AboutTree() {
  return (
    <article className="about-tree">
      <div className="about-tree__branch">
        <h2 className="header-font-size">What We Do</h2>

        <div className="about-tree__leaf">
          <p>
            Invests in the future of our quality of life community by creating
            and managing funds: all gifts from donors go into permanent
            endowments
          </p>
        </div>
        <div className="about-tree__leaf">
          <p>
            Addresses community needs and opportunities; encourages caring
            citizens to provide leadership
          </p>
        </div>
      </div>

      <div className="about-tree__branch about-tree__branch--right">
        <div className="about-tree__leaf">
          <p>
            Provides grants to local charities to improve Invests in the future
            of our quality of life
          </p>
        </div>
        <div className="about-tree__leaf">
          <p>
            Ensures the integrity of funds and that the wishes of donors are
            respected
          </p>
        </div>
      </div>
    </article>
  );
}
