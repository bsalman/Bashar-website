import React from "react";
import banner from "../assets/images/banner-php.png";
import bs_web from "../assets/images/bs_web.png";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      className="hero d-flex justify-content-center align-items-center"
      id="section_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12">
            <div className="hero-text">
              <div className="hero-title-wrap d-flex align-items-center mb-4">
                <img
                  src={bs_web}
                  className="avatar-image avatar-image-large img-fluid"
                  alt="the developer Image"></img>
                <h1 className="hero-title ms-3 mb-0">{t("Hello friend!")}</h1>
              </div>
              <h2 className="mb-4">{t("I’m available for work.")}</h2>
              <p className="mb-4">
                <a className="custom-btn btn custom-link" href="#section_2">
                  {t("Let's begin")}
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-12 position-relative">
            <div className="hero-image-wrap"></div>
            <img
              src={banner}
              className="hero-image img-fluid"
              alt="javaScript and PHP image"></img>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#002CAA"
          fillOpacity="1"
          d="M0,192L12.6,170.7C25.3,149,51,107,76,90.7C101.1,75,126,85,152,112C176.8,139,202,181,227,192C252.6,203,278,181,303,149.3C328.4,117,354,75,379,48C404.2,21,429,11,455,37.3C480,64,505,128,531,138.7C555.8,149,581,107,606,106.7C631.6,107,657,149,682,154.7C707.4,160,733,128,758,128C783.2,128,808,160,834,165.3C858.9,171,884,149,909,117.3C934.7,85,960,43,985,21.3C1010.5,0,1036,0,1061,53.3C1086.3,107,1112,213,1137,266.7C1162.1,320,1187,320,1213,266.7C1237.9,213,1263,107,1288,69.3C1313.7,32,1339,64,1364,64C1389.5,64,1415,32,1427,16L1440,0L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"></path>
      </svg>
    </section>
  );
}
