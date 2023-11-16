import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import planetData from "../data.json";

const planet = planetData[2];

export default function Earth() {
  return (
    <section className="planet earth">
      <Tabs>
        <TabList className="tab-list">
          <Tab
            className="tab"
            selectedClassName="active-tab"
            style={{ borderColor: "#545BFE" }}
          >
            Overview
          </Tab>
          <Tab
            className="tab"
            selectedClassName="active-tab"
            style={{ borderColor: "#545BFE" }}
          >
            Internal Structure
          </Tab>
          <Tab
            className="tab"
            selectedClassName="active-tab"
            style={{ borderColor: "#545BFE" }}
          >
            Surface Geology
          </Tab>
        </TabList>
        <TabPanel>
          <div className="img-container">
            <img src="src\assets\planet-earth.svg" alt="" />
          </div>
          <div className="heading-text">
            <h1>{planet.name}</h1>
            <p>{planet.overview.content}</p>
            <p className="source-text">
              Source:{" "}
              <a
                href={planet.overview.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                Wikipedia
              </a>
              <img src="src\assets\icon-source.svg" alt="external link icon" />
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="img-container">
            <img src="src\assets\planet-earth-internal.svg" alt="" />
          </div>
          <div className="heading-text">
            <h1>{planet.name}</h1>
            <p>{planet.structure.content}</p>
            <p className="source-text">
              Source:{" "}
              <a
                href={planet.structure.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                Wikipedia
              </a>
              <img src="src\assets\icon-source.svg" alt="external link icon" />
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="img-container">
            <img src="src\assets\planet-earth.svg" alt="" />
            <img
              src="src\assets\geology-earth.png"
              alt=""
              className="geology-img"
            />
          </div>
          <div className="heading-text">
            <h1>{planet.name}</h1>
            <p>{planet.geology.content}</p>
            <p className="source-text">
              Source:{" "}
              <a
                href="https://en.wikipedia.org/wiki/Earth#Surface"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wikipedia
              </a>
              <img src="src\assets\icon-source.svg" alt="external link icon" />
            </p>
          </div>
        </TabPanel>
      </Tabs>
      <div className="statistics">
        <div className="row">
          <p className="stat-name">Rotation Time</p>
          <p className="stat-value">{planet.rotation}</p>
        </div>
        <div className="row">
          <p className="stat-name">Revolution Time</p>
          <p className="stat-value">{planet.revolution}</p>
        </div>
        <div className="row">
          <p className="stat-name">Radius</p>
          <p className="stat-value">{planet.radius}</p>
        </div>
        <div className="row">
          <p className="stat-name">Temperature</p>
          <p className="stat-value">{planet.temperature}</p>
        </div>
      </div>
    </section>
  );
}
