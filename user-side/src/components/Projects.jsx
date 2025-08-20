import React, { useEffect, useState } from "react";
import { allMyProjectsPost } from "../service/api";
import { Link } from "react-router-dom";
import ProjectsImage from "../assets/images/Projects.jpg";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    allMyProjectsPost().then((data) => {
      if (data && data != 2) {
        setProjects(data);
      }
    });
  }, []);

  const renderingProjects = projects.map((project, index) => {
    console.log(project.web_img_url);

    return (
      <div className="col col-md-6 col-12" key={index}>
        <div className="projects-thumb">
          <div className="projects-info">
            <small className="projects-tag">{project.description}</small>

            <h3 className="projects-title">{project.project_name}</h3>
          </div>

          <Link to={project.project_url} target="_blank">
            <img
              //to do images src
              src={`../../../public/images/${project.web_img_url}`}
              className="projects-image img-fluid"
              alt=""
            />
          </Link>
        </div>
      </div>
    );
  });
  return (
    <>
      <section className="projects section-padding" id="Projects">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-8 col-12 ms-auto">
              <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                <img
                  src={ProjectsImage}
                  className="avatar-image img-fluid"
                  alt="Projects image"
                />

                <h2 className="text-white ms-4 mb-0">{t("Projects")}</h2>
              </div>
            </div>
            <div className="clearfix d-flex justify-content-center align-items-center">
              <h3>{t("Projects_I_participated_in")}</h3>
            </div>
            {renderingProjects}
          </div>
        </div>
      </section>
    </>
  );
}
