import React from "react";

import { VscCompass, VscMap, VscHeart, VscGlobe } from "react-icons/vsc";

const Features = () => {
  return (
    <section className="features">
      <div className="features__container">
        <div className="feature--box">
          <div className="feature">
            <VscGlobe className="feature__icon" />
            <h3 className="heading-tertiary u-mb-m u-mt-m">
              Explore the world
            </h3>
            <p className="feature__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              nostrum temporibus facere?
            </p>
          </div>
          <div className="feature">
            <VscCompass className="feature__icon" />
            <h3 className="heading-tertiary u-mb-m u-mt-m">Meet Nature</h3>
            <p className="feature__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              nostrum temporibus facere?
            </p>
          </div>
          <div className="feature">
            <VscMap className="feature__icon" />
            <h3 className="heading-tertiary u-mb-m u-mt-m">Find your way</h3>
            <p className="feature__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              nostrum temporibus facere?
            </p>
          </div>
          <div className="feature">
            <VscHeart className="feature__icon" />
            <h3 className="heading-tertiary u-mb-m u-mt-m">
              Live a Healthier Life
            </h3>
            <p className="feature__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              nostrum temporibus facere?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
