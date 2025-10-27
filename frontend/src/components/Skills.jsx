import React from "react";
import { allMySkillsPost } from "../service/api";
import SkillsImage from "../assets/images/Skills.jpg";
import { withTranslation } from "react-i18next";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    };
  }
  componentDidMount() {
    allMySkillsPost().then((data) => {
      if (data != 2) {
        this.setState({ ...this.state, skills: data });
      }
    });
  }

  render() {
    const { t } = this.props;

    const renderingInSkills = this.state.skills.map((skill, index) => (
      <div key={index} className="col-lg-3 col-md-6 col-12">
        <div
          className={`services-thumb ${
            index % 2 === 0 ? "" : "services-thumb-up"
          }`}>
          <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
            <h5 className="mb-0">{skill.skill}</h5>
            <div className="services-price-wrap ms-auto">
              <p className="services-price-text mb-0">{`${skill.skillLevel} %`}</p>
              <div className="services-price-overlay"></div>
            </div>
          </div>
          <p>{skill.main_direction}</p>
          <div className="services-icon-wrap d-flex justify-content-center align-items-center">
            <span
              className={`services-icon icon icon-${skill.skill} no-text`}></span>
          </div>
        </div>
      </div>
    ));

    return (
      <>
        <section className="services section-padding" id="Skills">
          <div className="container">
            <div className="row">
              <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                <img
                  src={SkillsImage}
                  className="avatar-image img-fluid"
                  alt=""
                />
                <h2 className="text-white ms-4 mb-0">{t("SKILLS")}</h2>
              </div>
              <div className="row pt-lg-5">{renderingInSkills}</div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
const TranslatedSkills = withTranslation()(Skills);
export default TranslatedSkills;
