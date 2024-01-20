import Banner from "./../../components/banner/Banner";
import Collapse from "./../../components/collapse/Collapse";
import aboutUsData from "./../../data/About-data.js";
import "./about.scss";

function About() {
  return (
    <>
      <Banner extraClass="about-us" />
      <section className="about-container">
        {aboutUsData.map((data, idx) => (
          <Collapse
            {...data}
            collapseState={true}
            key={`${data.title}-${idx}`}
          />
        ))}
      </section>
    </>
  );
}

export default About;
