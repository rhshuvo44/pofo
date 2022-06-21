import { Tab } from "bootstrap";
import React from "react";
import { Tabs } from "react-bootstrap";

const Portfolio = () => {
  return (
    <sectiopn>
      <div className="container py-5">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="all" title="All">
            <h1>All</h1>
          </Tab>
          <Tab eventKey="web" title="Web">
            <h1>profile</h1>{" "}
          </Tab>
          <Tab eventKey="adventising" title="Adventising">
            <p>adventising</p>
          </Tab>
          <Tab eventKey="branding" title="Branding">
            <p>Contact</p>
          </Tab>
          <Tab eventKey="design" title="Design">
            <p>Contact</p>
          </Tab>
          <Tab eventKey="photography" title="Photography">
            <p>Contact</p>
          </Tab>
        </Tabs>
      </div>
    </sectiopn>
  );
};

export default Portfolio;
