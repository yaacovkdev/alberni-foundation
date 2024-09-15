import "./AboutHeader.css";

export default function AboutHeader() {
  return (
    <div className="about-header">
      <h1 className="about-header__title title-font-size">About</h1>

      <div className="about-header__leaves">
        <div className="about-header__leaf about-header__leaf--left" />
        <div className="about-header__leaf about-header__leaf--right" />
      </div>
    </div>
  );
}
