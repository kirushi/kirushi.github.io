import React, { Component } from "react";
import { Link } from "react-router";
import Smiley from "../assets/smiley.svg";
import Excelens from "../assets/projects-excelens.png";
import LeapThought from "../assets/projects-leapthought.png";
import QJ from "../assets/projects-qj.png";

class Home extends Component {
  render() {
    return (
      <div className="row no-gutters">
        <div className="col col-md-4 col-lg-5 hidden-md-down">
          <div className="backgroundImg backgroundImg--shibuya">
            <h5 className="backgroundImg__desc font--semiBold font--white">Shibuya crossing, Tokyo, Japan</h5>
          </div>
        </div>
        <div className="col col-md-8 col-lg-7">
          <main>
            <h1 className="margin__bottom--md">
              Hi there,
              <div className="">
              </div>
            </h1>
            <h2 className="font--regular margin__bottom--lg">I'm <span className="tooltip tooltip--red tooltip--dots">Kirushi Arunthavasothy</span> -</h2>
            <h2 className="font--regular margin__bottom--xl">
              A front-end engineer with a love for all things React.
              <span className="margin__left--lg"><img className="smiley" height={30} width={30} src={Smiley} /></span>
            </h2>
            <div className="projects">
              <h5 className="projects__header margin__bottom--md">
                <span className="projects__header__text">Recent Projects</span>
              </h5>
              <Link className="projects__item" to="/">
                <div className="row">
                  <div className="col col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <img src={Excelens} className="img-fluid rounded" alt="Excelens" />
                  </div>
                  <div className="col col-xs-7 col-sm-7 col-md-7 col-lg-7 center-child-vertical">
                    <div className="padding__left--md">
                      <div className="font--red">
                        <h3>Excelens - <span className="font--regular">Process automation</span></h3>
                        <h5 className="projects__item__desc">Web App <span className="font--regular">| 2016 - Present</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link className="projects__item" to="/">
                <div className="row">
                  <div className="col col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <img src={LeapThought} className="img-fluid rounded" alt="LeapThought" />
                  </div>
                  <div className="col col-xs-7 col-sm-7 col-md-7 col-lg-7 center-child-vertical">
                    <div className="padding__left--md">
                      <div className="font--red">
                        <h3>LeapThought</h3>
                        <h5 className="projects__item__desc">Website <span className="font--regular">| 2016 - Present</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link className="projects__item" to="/">
                <div className="row">
                  <div className="col col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <img src={QJ} className="img-fluid rounded" alt="QJ" />
                  </div>
                  <div className="col col-xs-7 col-sm-7 col-md-7 col-lg-7 center-child-vertical">
                    <div className="padding__left--md">
                      <div className="font--red">
                        <h3>Quick Jandal - <span className="font--regular">Food delivery</span></h3>
                        <h5 className="projects__item__desc">Web & Mobile App <span className="font--regular">| 2017</span></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Home;
