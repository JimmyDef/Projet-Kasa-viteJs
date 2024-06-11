import Banner from "../../components/banner/Banner.js";
import Collapse from "../../components/collapse/Collapse.js";
import aboutUsData from "../../data/About-data.ts";
import "./about.scss";

type AboutUs = {
  title: string;
  text: string;
};

const About = () => {
  return (
    <>
      <Banner extraClass="about-us" />
      <section className="about-container">
        {aboutUsData.map((data: AboutUs, idx: number) => (
          <Collapse
            content={data.text}
            title={data.title}
            isCollapseOpen={true}
            key={`${data.title}-${idx}`}
          />
        ))}
      </section>
    </>
  );
};

export default About;
