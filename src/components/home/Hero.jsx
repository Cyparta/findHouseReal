import HeroFilter from "./HeroFilter";

const Hero = () => {
  return (
    <section className="home-one home1-overlay home1_bgi1">
      <div className="container">
        <div className="row posr">
          <div className="col-lg-12">
            <HeroFilter />
          </div>
        </div>
        <div className="mouse_scroll">
          <a href="#feature-property">
            <div className="icon">
              <h4>Scroll Down</h4>
              <p>to discover more</p>
            </div>
            <div className="thumb">
              <img
                src="/findHouseReal/assets/images/resource/mouse.png"
                alt="mouse.png"
              />
            </div>
          </a>
        </div>
      </div>
      {/* End .container */}
    </section>
  );
};

export default Hero;
