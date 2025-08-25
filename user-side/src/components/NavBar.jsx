import { useState, useEffect, useRef } from "react";
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
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const sectionsList = [
    "Home",
    "Projects",
    "Experience",
    "Education",
    "Skills",
    "Contact"
  ];

  // Toggle für kleine Navbar
  const toggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  // Sticky Navbar mit JS (Alternative: CSS sticky)
  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > navRef.current.offsetTop) {
        navRef.current.classList.add("sticky");
      } else {
        navRef.current.classList.remove("sticky");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver für Scroll Tracking
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    // Beim Laden: Hash aktivieren
    if (window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      setActiveSection(hash);
    } else {
      setActiveSection(sections[0].id);
    }

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Smooth Scroll aktivieren
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Beim Klick aktiv setzen + Menü schließen
  const handleLinkClick = (section) => {
    setActiveSection(section);
    handleClose();
  };

  return (
    <div className="container" ref={navRef}>
      <a href="/" className="navbar-brand mx-lg-0">
        BS
      </a>

      {/* Mobile Navbar */}
      <div className="navBar_small">
        <Button onClick={toggle} className="btn-toggler">
          <span className={`icon icon-${isOpen ? "x" : "list"} no-text`}></span>
        </Button>
        <Collapse isOpen={isOpen} className="collapse-element">
          <Card className="list-container">
            <CardBody>
              <ListGroup>
                {sectionsList.map((section) => (
                  <ListGroupItem
                    key={section}
                    className="g-item"
                    onClick={() => handleLinkClick(section)}>
                    <a
                      href={`#${section}`}
                      className={activeSection === section ? "active" : ""}>
                      {t(section.toUpperCase())}
                    </a>
                  </ListGroupItem>
                ))}
                <ListGroupItem>
                  <LanguageList />
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Collapse>
      </div>

      {/* Desktop Navbar */}
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-lg-5">
          {sectionsList.map((section) => (
            <li className="nav-item" key={section}>
              <a
                href={`#${section}`}
                className={`${
                  activeSection === section ? "active" : ""
                } nav-link click-scroll`}
                onClick={() => handleLinkClick(section)}>
                {t(section.toUpperCase())}
              </a>
            </li>
          ))}
          <LanguageList />
        </ul>
      </div>
    </div>
  );
}
