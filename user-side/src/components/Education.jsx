import { useEffect, useState } from "react";
import { allMyEducationPost } from "../service/api";
import education from "../assets/images/education.jpg";
export default function Education() {
  const [myEducation, setMyEducation] = useState([]);
  useEffect(() => {
    allMyEducationPost().then((data) => {
      if (data && data != 2) {
        setMyEducation(data);
      }
    });
  }, []);
  const renderingEducation = myEducation.map((education, index) => {
    return (
      <div key={index} className="col-md-4">
        <div className="single-horizontal-timeline">
          <div className="experience-time">
            <h2>
              {new Date(education.start_date).getFullYear()}-
              {new Date(education.end_date).getFullYear()}
            </h2>
            <h3>{education.certificate}</h3>
          </div>
          <div className="timeline-horizontal-border position-relative">
            <i className="icon icon-colored_circle no-text colored_circle"></i>
            <span className="single-timeline-horizontal"></span>
          </div>
          <div className="timeline">
            <div className="timeline-content">
              <h4 className="title">{education.location}</h4>

              <p className="description">{education.specialization}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <section id="education" className="education section-padding">
        <div className="container">
          <div className="row">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
              <img
                src={education}
                className="avatar-image img-fluid"
                alt="education image"
              />
              <h2 className="text-white ms-4 mb-0">Education</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="education-horizontal-timeline">
            <div className="row">{renderingEducation}</div>
          </div>
        </div>
      </section>
    </>
  );
}
