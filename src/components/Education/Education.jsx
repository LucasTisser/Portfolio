import React from "react";

import "./Education.css";

import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import CardGroup from "react-bootstrap/CardGroup";

export default function Education() {
  return (
    
      <div className="education">
        <div>
        <h2 className="educationTitle">Educacion</h2>
        </div>
            <h3 className="educationSubTitle">Instituto Coderhouse</h3>
        <div className="cardContainer">
          <Card style={{ height: '14rem' }} className="cardDesarrollo">
            <Card.Body className="cardDesarrolloBody">
              <Card.Title>Curso Desarrollador web</Card.Title>
              <Card.Text>Noviembre, 2021 / Enero, 2022</Card.Text>
              <CardGroup className="cardDesarrolloBadges">
                <Badge pill bg="dark">
                  HTML
                </Badge>
                <Badge pill bg="dark">
                  CSS
                </Badge>
                <Badge pill bg="dark">
                  SASS
                </Badge>
                <Badge pill bg="dark">
                  Git
                </Badge>
                <Badge pill bg="dark">
                  Bootstrap
                </Badge>
                <Badge pill bg="dark">
                  SEO
                </Badge>
              </CardGroup>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.coderhouse.com/certificados/621ac044245a2a0026cefb84"
              >
                <button className="btnCertificado">
                  Ver Certificado Online
                </button>
              </a>
            </Card.Body>
          </Card>
          <Card style={{ height: '14rem' }} className="cardDesarrollo">
          <Card.Body className="cardDesarrolloBody">
              <Card.Title>Curso de Javascript</Card.Title>
              <Card.Text>Febrero, 2022 / Marzo, 2022</Card.Text>
              <CardGroup className="cardDesarrolloBadges">
                <Badge pill bg="dark">
                  AJAX
                </Badge>
                <Badge pill bg="dark">
                  JSON
                </Badge>
                <Badge pill bg="dark">
                  Arrays
                </Badge>
                <Badge pill bg="dark">
                  DOM
                </Badge>
                <Badge pill bg="dark">
                  API
                </Badge>
                <Badge pill bg="dark">
                  Rest API
                </Badge>
              </CardGroup>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.coderhouse.com/certificados/6272dd8b94bff2001a027983"
              >
                <button className="btnCertificado">
                  Ver Certificado Online
                </button>
              </a>
            </Card.Body>
          </Card>
          <Card style={{ height: '14rem' }} className="cardDesarrollo">
            <Card.Body className="cardDesarrolloBody">
              <Card.Title>Curso de ReactJs</Card.Title>
              <Card.Text>Abril, 2022 / Mayo, 2023</Card.Text>
              <CardGroup className="cardDesarrolloBadges">
                <Badge pill bg="dark">
                  Jsx
                </Badge>
                <Badge pill bg="dark">
                  Transpiling
                </Badge>
                <Badge pill bg="dark">
                  Routing
                </Badge>
                <Badge pill bg="dark">
                  Eventos
                </Badge>
                <Badge pill bg="dark">
                  Context
                </Badge>
                <Badge pill bg="dark">
                    Hooks
                </Badge>
              </CardGroup>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.coderhouse.com/certificados/62a8fb69bf78c90019c07ec2"
              >
                <button className="btnCertificado">
                  Ver Certificado Online
                </button>
              </a>
            </Card.Body>
          </Card>
          <Card style={{ height: '14rem' }} className="cardDesarrollo">
            <Card.Body className="cardDesarrolloBody">
              <Card.Title>Curso de Programacion Backend</Card.Title>
              <Card.Text>Julio, 2022 / Febrero, 2023</Card.Text>
              <CardGroup className="cardDesarrolloBadges">
                <Badge pill bg="dark">
                  Node.js
                </Badge>
                <Badge pill bg="dark">
                  Express
                </Badge>
                <Badge pill bg="dark">
                  MongoDB
                </Badge>
                <Badge pill bg="dark">
                  SQL
                </Badge>
                <Badge pill bg="dark">
                  Npm
                </Badge>
                <Badge pill bg="dark">
                  Auth
                </Badge>
              </CardGroup>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.coderhouse.com/certificados/63f6f63139a85a000fc6ec9d"
              >
                <button className="btnCertificado">
                  Ver Certificado Online
                </button>
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    
  );
}
