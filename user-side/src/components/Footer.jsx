import { useEffect } from "react";
import { Link } from "react-router-dom";

// import { userInfoPost } from "../service/api";

export default function Footer({ userInfo, error, isLoading }) {
  useEffect(() => {}, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>error fetching userInfo </div>;
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row d-flex justify-content-around flex-md-row">
          <div className="col-md-6">
            <div className="contact-footer-info">
              <ul>
                <li>
                  <Link
                    to="#"
                    className="footer-icon-link d-flex justify-content-start align-items-center ">
                    <span className="icon icon-map-pin no-text"></span>
                    <small>
                      Germany &nbsp;{userInfo.zip}&nbsp;
                      {userInfo.city}
                    </small>
                  </Link>
                </li>
                <li>
                  <Link to={`callto:${userInfo.phone}`}>
                    <small className="icon icon-call no-text">
                      &nbsp;{userInfo.phone}
                    </small>
                  </Link>
                </li>
                <li>
                  <Link to={`mailto:${userInfo.email}`}>
                    <small className="icon icon-at no-text">
                      &nbsp;{userInfo.email}
                    </small>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-around align-items-center">
            <div className="col-md-8 col-sm-6 col-12">
              <div className="social-media .bg-secondary">
                <ul className="social-media-list">
                  <li>
                    <Link to={userInfo.xing_url} target="_blank">
                      <span className="icon icon-Xing no-text"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to={userInfo.github_url} target="_blank">
                      <span className="icon icon-Github no-text"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to={userInfo.linkedin_url} target="_blank">
                      <span className="icon icon-LinkedIn no-text"></span>
                    </Link>
                  </li>
                  {/* <li>
                    <Link to={`../${userInfo.cv_file_url}`} target="_blank">
                      <span className="icon icon-file-download no-text"></span>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="Date-protection">
              <ul>
                <li>
                  <Link
                    to={userInfo.userInfo_protection_file_url}
                    target="_blank"
                    className="d-flex justify-content-center align-items-center">
                    <small className="fs-6">UserInfo Protection</small>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
