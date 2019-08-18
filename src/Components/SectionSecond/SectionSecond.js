import React, {Fragment} from "react";
import classes from "./SectionSecond.module.css";
import img1 from "../../Assets/arhitectureCarpet.png";
import img2 from "../../Assets/bookCasualFashion.png";
import img3 from "../../Assets/apartmentArchitecture.png";
import img4 from "../../Assets/apartmentArhitecture2.png";
import { Spring } from "react-spring/renderprops";

const SectionSecond = props => {
  return (
    <section className={classes.SectionSecond}>
      <div className="container ">
        <Spring
          immediate={window.innerWidth < 768}
          from={{ opacity: 0, transform: "translateX(-200px)" }}
          to={
            props.active[1]
              ? { opacity: 1, transform: "translateX(0)" }
              : { opacity: 0 }
          }
          config={{ mass: 1, tension: 280, friction: 80 }}
        >
          {props => (
            <div
              className="row justify-content-left pl-lg-5 pl-md-5 text-left slideIn"
              style={window.innerWidth > 768 ? props : null}
            >
              <div className="col sm-12 col-md-6 col-lg-5 mb-5 mt-5">
                <div className={classes.Headings}>
                  <h4>Lorem ipsum</h4>
                </div>
                <p className={classes.Text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  numquam quasi reiciendis nobis fuga modi at tempore quos
                  reprehenderit quae soluta, exercitationem rerum saepe.
                  Voluptates fugiat iste nobis minus repudiandae cumque quidem
                  qui rerum. Qui, aliquid? Quasi architecto tempora tempore?
                  Blanditiis magni fugit sit accusantium voluptatum labore amet?
                  Voluptatem, nostrum.
                </p>
                <div className={classes.Expand}>
                  <h6>Discover Our</h6>
                  <span>&rsaquo;</span>
                </div>
              </div>
            </div>
          )}
        </Spring>
        <Spring
          immediate={window.innerWidth < 768}
          from={{ opacity: 0, transform: "translateY(50px)" }}
          to={
            props.active[2]
              ? { opacity: 1, transform: "translateX(0)" }
              : { opacity: 0 }
          }
          config={{ mass: 1, tension: 280, friction: 80 }}
        >
          {props => (
            <Fragment>
            <div className="row mt-5 mb-4 slideIn" style={window.innerWidth > 768 ? props : null}>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className={classes.Images}>
                  <img src={img1} alt="" />
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className={classes.Images}>
                  <img src={img2} alt="" />
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className={classes.ImageWrap}>
                  <div className={classes.Images}>
                    <img src={img3} alt="" />
                  </div>
                  <div className={classes.Images}>
                    <img src={img4} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-end text-right" style={window.innerWidth > 768 ? props : null}>
              <div className="col-sm-12 col-md-12-col-lg-12">
                <div className={classes.Caption}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            </Fragment>
          )}
        </Spring>
      </div>
    </section>
  );
};

export default SectionSecond;
