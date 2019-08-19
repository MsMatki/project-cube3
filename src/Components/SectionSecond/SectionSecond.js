import React, {Component, Fragment} from "react";
import classes from "./SectionSecond.module.css";
import Carousel from './Carousel/Carousel'
import { Spring } from "react-spring/renderprops";


class SectionSecond extends Component{

  render(){

  return (
    <section className={classes.SectionSecond}>
      <div className="container ">
        <Spring
          immediate={window.innerWidth < 768}
          from={{ opacity: 0, transform: "translateX(-200px)" }}
          to={
            this.props.active[1]
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
        <Carousel active={this.props.active}/>       
      </div>
    </section>
  );
          }
};

export default SectionSecond;
