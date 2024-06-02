import React from 'react';
import { Col } from 'react-bootstrap';

function Projects(props) {
  return (
    <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
      <figure className="image-block">
        <img src={props.itemObj.image} alt={props.itemObj.title} />
        <figcaption>
          <h2>{props.itemObj.title}</h2>
          <p>{props.itemObj.subText}</p>
          <div className="button-group">
            <button onClick={() => window.open(props.itemObj.repoURL, "_blank")}>
              See Repo
            </button>
          </div>
        </figcaption>
      </figure>
    </Col>
  );
}

export default Projects;