import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import planetData from "../data.json";

const planet = planetData[1];

export default function Venus() {
  return (
    <section className="planet venus">
      <Tabs>
        <TabList className="tab-list">
          <Tab
            className="tab"
            selectedClassName="active-tab"
            style={{ borderColor: "#F7CC7F" }}
          >
            Overview
          </Tab>
          <Tab
            className="tab"
            selectedClassName="active-tab"
            style={{ borderColor: "#F7CC7F" }}
          >
            Internal Structure
          </Tab>
          <Tab
            className="tab"
            selectedClassName="active-tab"
            style={{ borderColor: "#F7CC7F" }}
          >
            Surface Geology
          </Tab>
        </TabList>
        <TabPanel>
          <div className="img-container">
            <img src="src\assets\planet-venus.svg" alt="" />
          </div>
          <div className="heading-text">
            <h1>{planet.name}</h1>
            <p>
              Venus is the second planet from the Sun. It is named after the
              Roman goddess of love and beauty. As the brightest natural object
              in Earth's night sky after the Moon, Venus can cast shadows and
              can be, on rare occasions, visible to the naked eye in broad
              daylight.
            </p>
            <p className="source-text">
              Source:{" "}
              <a
                href="https://en.wikipedia.org/wiki/Venus"
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
            <img src="src\assets\planet-venus-internal.svg" alt="" />
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
            <img src="src\assets\planet-venus.svg" alt="" />
            <img
              src="src\assets\geology-venus.png"
              alt=""
              className="geology-img"
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
