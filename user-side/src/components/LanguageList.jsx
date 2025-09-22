import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Collapse, ListGroup, ListGroupItem, CardBody, Card } from "reactstrap";

export default function LanguageList() {
  const languages = [
    { code: "en", name: "En" },
    { code: "de", name: "De" }
  ];

  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(""); // Start leer
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // ✅ Wenn Seite geladen wird, Sprache aus i18n übernehmen
  useEffect(() => {
    const lang = i18n.language || "en"; // Fallback zu en
    const langObj = languages.find((l) => l.code === lang);
    setCurrentLanguage(langObj ? langObj.name : "En");
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Sprache ändern
    const langObj = languages.find((l) => l.code === lng);
    setCurrentLanguage(langObj ? langObj.name : "En");
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <span className="language-text">{currentLanguage}</span>
      &nbsp;
      <span
        onClick={toggle}
        className="globe-icon icon icon-globe no-text"></span>
      <Collapse isOpen={isOpen} className="collapse-element lang-list">
        <Card className="list-container">
          <CardBody>
            {languages.map((language) => (
              <ListGroup className="list-group-lang" key={language.code}>
                <ListGroupItem className="g-item">
                  <span
                    className="language-btn"
                    onClick={() => changeLanguage(language.code)}>
                    {language.name}
                  </span>
                </ListGroupItem>
              </ListGroup>
            ))}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}
