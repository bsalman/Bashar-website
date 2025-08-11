import React, { useEffect, useState } from "react";
import { allMyExperiencePost } from "../service/api";
import SubHero from "./SubHero";
import Projects from "./Projects";
export default function Experience() {
  const [experiences, setExperience] = useState([]);
  useEffect(() => {
    allMyExperiencePost().then((data) => {
      if (data && data != 2) {
        setExperience(data);
      }
    });
  }, []);
  const experiencesLength = experiences.length;
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const renderingExperience = experiences
    .toReversed()
    .map((experience, index) => {
      return (
        <li key={index}>
          <div className="single-timeline-box fix">
            <div className="row justify-content-center">
              <div
                className={`col-lg-5 text-lg-end ${
                  index !== experiencesLength - 1 ? "left-side" : ""
                }`}>
                <div className="experience-time  ">
                  <h2>
                    {month[new Date(experience.start_date).getUTCMonth()]}.
                    {new Date(experience.start_date).getFullYear()} -
                    {month[new Date(experience.end_date).getUTCMonth()]}.
                    {new Date(experience.end_date).getFullYear()}
                  </h2>
                  <h3> {experience.company} </h3>
                </div>
              </div>
              <div className="col-lg-5 text-lg-start right-side">
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 className="title">
                      <span>
                        <i className="icon icon-colored_circle no-text colored_circle"></i>
                      </span>

                      {experience.job_title}
                    </h4>
                    <h5>
                      {experience.location},{experience.country}
                    </h5>
                    <p className="description">{experience.occupation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    });
  return (
    <>
      <SubHero />
      <section className="clients section-padding experience" id="experience">
        <div className="container">
          <div className="row ">
            <div className="col-12 ms-auto">
              <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                <img
                  src="./images/Experience.jpg"
                  className="avatar-image img-fluid"
                  alt="Projects image"
                />
                <h2 className="text-white ms-4 mb-0">Experience</h2>
              </div>
            </div>
          </div>
          <div className="experience-content row">
            <div className="main-timeline">
              <ul>{renderingExperience}</ul>
            </div>
          </div>
        </div>
      </section>
      <Projects />
    </>
  );
}
