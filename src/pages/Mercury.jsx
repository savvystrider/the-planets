import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import planetData from "../data.json";

const planet = planetData[0];

export default function Mercury() {
  return (
    <section className="planet mercury">
      <Tabs>
        <TabList className="tab-list">
          <Tab
            className="tab"
            selectedClassName="active-tab"
            style={{ borderColor: "#DEF4FC" }}
          >
            Overview
          </Tab>
          <Tab
            className="tab"
            selectedClassName="active-tab"
            style={{ borderColor: "#DEF4FC" }}
          >
            Internal Structure
          </Tab>
          <Tab
            className="tab"
            selectedClassName="active-tab"
            style={{ borderColor: "#DEF4FC" }}
          >
            Surface Geology
          </Tab>
        </TabList>
        <TabPanel>
          <div className="img-container">
            <img
              src="src\assets\planet-mercury.svg"
              alt="illustration of planet Mercury"
              className="planet-img"
            />
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
            <img
              src="src\assets\planet-mercury-internal.svg"
              alt="illustration of Mercury's interior"
              className="planet-img"
            />
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
            <img
              src="src\assets\planet-mercury.svg"
              alt="illustration of Mercury"
              className="planet-img"
            />
            <img
              src="src\assets\geology-mercury.png"
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
                href={planet.geology.source}
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
