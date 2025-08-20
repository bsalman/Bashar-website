import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
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
  // cerate a ref
  const navRef = useRef(null);

  const isNavBottom = (element) => {
    if (!element) return 0; // Return 0 if element is null
    return element.offsetTop;
  };
  // toggle the Small navbar list
  const toggle = () => setIsOpen(!isOpen);
  // close the  Small navbar list
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
        <a href="/" className="navbar-brand  mx-lg-0">
          BS
        </a>
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
                      <a
                        href="#Home"
                        className={pathname === "/" ? "active" : ""}>
                        {t("HOME")}
                      </a>
                    </ListGroupItem>
                    <ListGroupItem className=" g-item" onClick={handelClose}>
                      <a
                        href="#Experience"
                        className={pathname === "/Experience" ? "active" : ""}>
                        {t("EXPERIENCE")}
                      </a>
                    </ListGroupItem>
                    <ListGroupItem className=" g-item" onClick={handelClose}>
                      <a
                        href="#Education"
                        className={pathname === "/Education" ? "active" : ""}>
                        {t("EDUCATION")}
                      </a>
                    </ListGroupItem>
                    <ListGroupItem className=" g-item" onClick={handelClose}>
                      <a
                        href="#Skills"
                        className={pathname === "/Skills" ? "active" : ""}>
                        {t("SKILLS")}
                      </a>
                    </ListGroupItem>
                    <ListGroupItem className=" g-item" onClick={handelClose}>
                      <a
                        href="#Contact"
                        className={pathname === "/Contact" ? "active" : ""}>
                        {t("CONTACT")}
                      </a>
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
              <a
                href="#Home"
                className={`${
                  pathname === "/" ? "active" : ""
                } nav-link click-scroll`}>
                {t("HOME")}
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Projects"
                className={`${
                  pathname === "/Projects" ? "active" : ""
                } nav-link click-scroll`}>
                {t("PROJECTS")}
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Experience"
                className={`${
                  pathname === "/Experience" ? "active" : ""
                } nav-link click-scroll`}>
                {t("EXPERIENCE")}
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Education"
                className={`${
                  pathname === "/Education" ? "active" : ""
                } nav-link click-scroll`}>
                {t("EDUCATION")}
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Skills"
                className={`${
                  pathname === "/Skills" ? "active" : ""
                } nav-link click-scroll`}>
                {t("SKILLS")}
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Contact"
                className={`${
                  pathname === "/Contact" ? "active" : ""
                } nav-link click-scroll`}>
                {t("CONTACT")}
              </a>
            </li>
            <LanguageList />
          </ul>
        </div>
        {/*  ==================== normal navigation bar end=============================== */}
      </div>
    </>
  );
}
