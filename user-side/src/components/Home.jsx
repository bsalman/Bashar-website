import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Hero from "./Hero";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";
import Education from "./Education";

import personalImage from "../assets/images/in_web_i.png";
import aboutImg from "../assets/images/about.jpg";

export default function Home({ userInfo, error, isLoading }) {
  const { t } = useTranslation();

  const [experienceYears, setExperienceYears] = useState(0);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const experienceYearsCalumet = () => {
    const thisYear = new Date().getFullYear();
    const startYear = new Date("February 2, 2022 01:15:00").getFullYear();
    setExperienceYears(thisYear - startYear);
  };

  useEffect(() => {
    const thisYear = new Date().getFullYear();
    const startYear = new Date("February 2, 2022 01:15:00").getFullYear();
    setExperienceYears(thisYear - startYear);
    setName(userInfo.first_name);
    setLastName(userInfo.last_name);
    experienceYearsCalumet();
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>error fetching userInfo </div>;
  }
  if (!userInfo) return <div>No user info available</div>;

  return (
    <>
      <Hero />
      <section className="about section-padding" id="section_2">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5 mt-lg-0 ">
              <div className="about-thumb">
                <div className="section-title-wrap d-flex justify-content-center  align-items-center mb-4">
                  <img
                    src={aboutImg}
                    className="avatar-image img-fluid"
                    alt="about image "
                  />
                  &nbsp;
                  <h2 className="text-white me-4 mb-0">{t("About_me")}</h2>
                </div>
                <div className="image-container float-lg-start float-md-end me-5 ">
                  <img
                    src={personalImage}
                    className="about-image img-thumbnail"
                    alt="my photo"
                  />
                </div>
                <h3 className="pt-2 mb-3">
                  HELLO I AM <span>{name ? name.toUpperCase() : "BASHAR"}</span>
                </h3>
                <p>{userInfo.position}</p>
                <p className="h4">{userInfo.description} </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="profile-thumb">
                <div className="profile-title">
                  <h4 className="mb-0">Information</h4>
                </div>
                <div className="profile-body">
                  <p>
                    <span className="profile-small-title">Name</span>
                    <span>{name ? name.toUpperCase() : "BASHAR"}</span>&nbsp;
                    <span>{lastName ? lastName.toUpperCase() : "SALMAN"}</span>
                  </p>
                  <p>
                    <span className="profile-small-title">Birthday</span>
                    <span>04 June 1984</span>
                  </p>
                  <p>
                    <span className="profile-small-title">Phone</span>
                    <span>
                      <a href={`tel:${userInfo.phone}`}>{userInfo.phone}</a>
                    </span>
                  </p>
                  <p>
                    <span className="profile-small-title">Email</span>
                    <span>
                      <a href={`mailto:${userInfo.email}`}>{userInfo.email}</a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
              <div className="about-thumb">
                <div className="row">
                  <div className="col-lg-6 col-6 featured-border-bottom py-2">
                    <strong className="featured-numbers">
                      {experienceYears}
                    </strong>

                    <p className="featured-text">Years of Experiences</p>
                  </div>
                  <div className="col-lg-6 col-6 featured-border-start featured-border-bottom ps-5 py-2">
                    <strong className="featured-numbers">
                      {userInfo.countProjects}
                    </strong>
                    <p className="featured-text">Projects I participated in</p>
                  </div>
                  <div className="col-lg-6 col-6 pt-4">
                    <strong className="featured-numbers">
                      {userInfo.countProjects}
                    </strong>

                    <p className="featured-text"> Happy Customers</p>
                  </div>
                  <div className="col-lg-6 col-6 featured-border-start ps-5 pt-4">
                    <strong className="featured-numbers">
                      {userInfo.countProgrammingSkills}
                    </strong>

                    <p className="featured-text">Programming Skills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
