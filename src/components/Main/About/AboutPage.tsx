import AboutHero from "./AboutHero";
import Brand from "../HomePage/Brand";
import JoinUs from "../JoinUs";

const AboutPage = () => {
    return (
      <main className="about">
          <h2 className="about__title">
            A brand built on the love of craftmanship, quality and outstanding
            customer service
          </h2>
          <AboutHero/>
          <Brand/>
          <JoinUs/>

      </main>
    );
}

export default AboutPage;