import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Adventing from "./Adventing";
import All from "./All";
import Branding from "./Branding";
import Design from "./Design";
import Photography from "./Photography";
import "./Portfolio.css";
import Web from "./Web";

const Portfolio = () => {
  return (
    <sectiopn id="portfolio">
      <div className="container-fuild py-5">
        <Tabs>
          <TabList style={{ width: 800, margin: "0 auto" }}>
            <Tab>ALL</Tab>
            <Tab>WEB</Tab>
            <Tab>ADVENTING</Tab>
            <Tab>BRANDING</Tab>
            <Tab>DESIGN</Tab>
            <Tab>PHOTOGRAPHY</Tab>
          </TabList>

          <TabPanel>
            <All />
          </TabPanel>
          <TabPanel>
            <Web />
          </TabPanel>
          <TabPanel>
            <Adventing />
          </TabPanel>
          <TabPanel>
            <Branding />
          </TabPanel>
          <TabPanel>
            <Design />
          </TabPanel>
          <TabPanel>
            <Photography />
          </TabPanel>
        </Tabs>
      </div>
    </sectiopn>
  );
};

export default Portfolio;
