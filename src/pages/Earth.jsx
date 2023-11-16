import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

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
            <h1>Earth</h1>
            <p>
              Third planet from the Sun and the only known planet to harbor
              life. About 29.2% of Earth's surface is land with remaining 70.8%
              is covered with water. Earth's distance from the Sun, physical
              properties and geological history have allowed life to evolve and
              thrive.
            </p>
            <p className="source-text">
              Source:{" "}
              <a
                href="https://en.wikipedia.org/wiki/Earth"
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
            <h1>Earth</h1>
            <p>
              Earth's interior, like that of the other terrestrial planets, is
              divided into layers by their chemical or physical (rheological)
              properties. The outer layer is a chemically distinct silicate
              solid crust, which is underlain by a highly viscous solid mantle.
            </p>
            <p className="source-text">
              Source:{" "}
              <a
                href="https://en.wikipedia.org/wiki/Earth#Internal_structure"
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
            <img src="https://en.wikipedia.org/wiki/Earth" alt="" />
            <img
              src="src\assets\geology-earth.png"
              alt=""
              className="geology-img"
            />
          </div>
          <div className="heading-text">
            <h1>Earth</h1>
            <p>
              The total surface area of Earth is about 510 million km2. The
              continental crust consists of lower density material such as the
              igneous rocks granite and andesite. Less common is basalt, a
              denser volcanic rock that is the primary constituent of the ocean
              floors.
            </p>
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
          <p className="stat-value">0.99 Days</p>
        </div>
        <div className="row">
          <p className="stat-name">Revolution Time</p>
          <p className="stat-value">365.26 Days</p>
        </div>
        <div className="row">
          <p className="stat-name">Radius</p>
          <p className="stat-value">6,371 KM</p>
        </div>
        <div className="row">
          <p className="stat-name">Temperature</p>
          <p className="stat-value">16°C</p>
        </div>
      </div>
    </section>
  );
}
