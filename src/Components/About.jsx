import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="u-center-text u-mb-l">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className="about__main-content">
        <div className="about__text-content">
          <h3 className="heading-tertiary u-mb-m">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem itaque beatae dolores sit magnam, incidunt cum
            expedita odit dolore necessitatibus? Nesciunt veritatis voluptatum
            aut tempora. Ducimus reiciendis aliquam magni quibusdam?
          </p>
          <h3 className="heading-tertiary u-mb-m">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima non
            deserunt nobis inventore nihil eligendi voluptates reprehenderit
            cumque eveniet, ducimus excepturi porro beatae repudiandae hic,
            possimus quibusdam alias quos officiis?
          </p>

          <a href="#" className="btn-secondary">
            Learn More &rarr;
          </a>
        </div>
        <div className="about__img-content">IMG</div>
      </div>
    </section>
  );
};

export default About;
