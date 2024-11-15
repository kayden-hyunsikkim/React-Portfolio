import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/Components.css";

export default function Project(props) {
  return (
    <Card id="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body id="texts">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.descriiption}</Card.Text>
        <div id="button">
          <Button variant="primary" href={props.page} target="_blank">
            Page
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
