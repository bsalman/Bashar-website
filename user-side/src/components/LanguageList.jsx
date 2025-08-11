import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Collapse, ListGroup, ListGroupItem, CardBody, Card } from "reactstrap";

export default function LanguageList() {
  const languages = [
    { code: "en", name: "En" },
    { code: "de", name: "De" }
  ];
  const [currentLanguage, setCurrentLanguage] = useState("En"); // Default language
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change the language
  };
  const ButtonElement = languages.map((language) => {
    return (
      <ListGroup className="list-group-lang" key={language.code}>
        <ListGroupItem className="g-item ">
          <span
            className="language-btn"
            onClick={() => {
              changeLanguage(language.code);
              setCurrentLanguage(language.name);
              setIsOpen(false);
            }}>
            {language.name}
          </span>
        </ListGroupItem>
      </ListGroup>
    );
  });
  return (
    <>
      <div className="language-switcher">
        <span className="language-text">{currentLanguage}</span>
        &nbsp;
        <React.StrictMode>
          <span
            onClick={toggle}
            className="globe-icon icon icon-globe no-text"></span>
          <Collapse isOpen={isOpen} className="collapse-element lang-list">
            <Card className="list-container">
              <CardBody>{ButtonElement}</CardBody>
            </Card>
          </Collapse>
        </React.StrictMode>
      </div>
    </>
  );
}
