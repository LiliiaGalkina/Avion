const AboutHero = () => {
    return (
      <section className="about-hero">
        <div className="about-hero__info info-about">
          <div className="about-info__body">
            <h3 className="info-about__title">
              From a studio in London to a global brand with over 400 outlets
            </h3>
            <p className="info-about__text">
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.
            </p>
            <p className="info-about__text">
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
          </div>
          <button className="info-about__button">Get in touch</button>
        </div>
        <div className="about-hero__img">
          <img
            src="/image/main/about/brand1.png"
            alt="the interior is decorated in beige tones"
          />
        </div>
        <div className="about-hero__img">
          <img
            src="/image/main/about/brand2.png"
            alt="the interior is decorated in light tones"
          />
        </div>
        <div className="about-hero__info info-about">
          <div className="about-info__body">
            <h3 className="info-about__title">
              Our service isn’t just personal, it’s actually hyper personally
              exquisite
            </h3>
            <p className="info-about__text">
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.
            </p>
            <p className="info-about__text">
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
          </div>
          <button className="info-about__button">Get in touch</button>
        </div>
      </section>
    );
}

export default AboutHero;