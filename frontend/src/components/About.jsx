import React from "react";
export default function About() {
  return (
    <div>
      <div class="row">
        <div className="d-lg-flex align-items-center d-none ms-auto .flex-column">
          <span className=" me-3 icon icon-map-pin no-text">
            Address (todo)
          </span>
          <span className=" me-3 icon icon-call no-text">Tel: 000000</span>
          <span className=" me-3 icon icon-at no-text">
            {" "}
            E-Mail: bashar.salman46@gmail.com
          </span>
          <a className="custom-btn btn" href="mailto:bashar.salman46@gmail.com">
            bashar.salman46@gmail.com
          </a>
          Datenschutz impressum
        </div>
        <div class="col-lg-4 col-12 ">
          <div className="social_media d-flex justify-content-around  align-items-center mb-4">
            <div type="button" className=" ing">
              <a
                href="https://www.xing.com/profile/Bashar_Salman/cv"
                target="_blank">
                <span className="icon icon-Xing no-text"></span>
              </a>
            </div>
            <div className="githup">
              <a
                href="https://github.com/bsalman?tab=repositories"
                target="_blank">
                <span className="icon icon-Github no-text"></span>
              </a>
            </div>
            <div className="in">
              <a href="https://www.linkedin.com/in/bashar-salman-9a2a931b4/">
                <span className="icon icon-LinkedIn no-text"></span>
              </a>
            </div>
            <div className="cv_download">
              <a href="/downloadFiles/lebenslauf.pdf" target="_blank">
                <span className="icon icon-file-download no-text"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
