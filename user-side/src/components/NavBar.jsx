import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageList from "./LanguageList";
import {
  Collapse,
  Button,
  ListGroup,
  ListGroupItem,
  CardBody,
  Card
} from "reactstrap";

export default function NavBar() {
  const { t } = useTranslation();
  const location = useLocation();
  const { pathname } = location;

  const [isOpen, setIsOpen] = useState(false);
  const navRef = React.createRef();
  const isNavBottom = (element) => {
    if (!element) return 0; // Return 0 if element is null
    return element.offsetTop;
  };

  const toggle = () => setIsOpen(!isOpen);

  const handelClose = () => setIsOpen(false);

  const handelScroll = () => {
    const wrappedElement = navRef.current;
    if (!wrappedElement) return;

    if (window.scrollY > isNavBottom(wrappedElement)) {
      wrappedElement.classList.add("sticky");
    } else {
      wrappedElement.classList.remove("sticky");
    }
  };

  useEffect(() => {
    // Adding scroll event listener to window
    window.addEventListener("scroll", handelScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <>
      <div className="container " id="todo" ref={navRef}>
        <Link to="/" className="navbar-brand  mx-lg-0">
          BS
        </Link>
        {/*====================== small navigation bar start=============================== */}
        <div className="navBar_small">
          <React.StrictMode>
            <Button onClick={toggle} className="btn-toggler">
              <span
                className={`icon icon-${
                  isOpen === !false ? "x" : "list"
                } no-text`}></span>
            </Button>
            <Collapse isOpen={isOpen} className="collapse-element">
              <Card className="list-container">
                <CardBody>
                  <ListGroup>
                    <ListGroupItem className=" g-item" onClick={handelClose}>
                      <Link to="/" className={pathname === "/" ? "active" : ""}>
                        {t("HOME")}
                      </Link>
                    </ListGroupItem>
                    <ListGroupItem className=" g-item" onClick={handelClose}>
                      <Link
                        to="/Education"
                        className={pathname === "/Education" ? "active" : ""}>
                        {t("EDUCATION")}
                      </Link>
                    </ListGroupItem>
                    <ListGroupItem className=" g-item" onClick={handelClose}>
                      <Link
                        to="/Experience"
                        className={pathname === "/Experience" ? "active" : ""}>
                        {t("EXPERIENCE")}
                      </Link>
                    </ListGroupItem>
                    <ListGroupItem className=" g-item" onClick={handelClose}>
                      <Link
                        to="/Skills"
                        className={pathname === "/Skills" ? "active" : ""}>
                        {t("SKILLS")}
                      </Link>
                    </ListGroupItem>
                    <ListGroupItem className=" g-item" onClick={handelClose}>
                      <Link
                        to="/Contact"
                        className={pathname === "/Contact" ? "active" : ""}>
                        {t("CONTACT")}
                      </Link>
                    </ListGroupItem>
                    <ListGroupItem className=" g-item">
                      <LanguageList />
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            </Collapse>
          </React.StrictMode>
        </div>
        {/*  ======================small navigation bar end================================= */}
        {/*  ==================== normal navigation bar start=============================== */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-lg-5">
            <li className="nav-item">
              <Link
                to="/"
                className={`${
                  pathname === "/" ? "active" : ""
                } nav-link click-scroll`}>
                {t("HOME")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Experience"
                className={`${
                  pathname === "/Experience" ? "active" : ""
                } nav-link click-scroll`}>
                {t("EXPERIENCE")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Education"
                className={`${
                  pathname === "/Education" ? "active" : ""
                } nav-link click-scroll`}>
                {t("EDUCATION")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Skills"
                className={`${
                  pathname === "/Skills" ? "active" : ""
                } nav-link click-scroll`}>
                {t("SKILLS")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className={`${
                  pathname === "/Contact" ? "active" : ""
                } nav-link click-scroll`}>
                {t("CONTACT")}
              </Link>
            </li>
            <LanguageList />
          </ul>
        </div>
        {/*  ==================== normal navigation bar end=============================== */}
      </div>
    </>
  );
}
