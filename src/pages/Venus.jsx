import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Venus() {
  return (
    <section className="planet venus">
      <Tabs>
        <TabList className="tab-list">
          <Tab className="tab" selectedClassName="active-tab">
            Overview
          </Tab>
          <Tab className="tab" selectedClassName="active-tab">
            Internal Structure
          </Tab>
          <Tab className="tab" selectedClassName="active-tab">
            Surface Geology
          </Tab>
        </TabList>
        <TabPanel>
          <div className="img-container">
            <img src="src\assets\planet-venus.svg" alt="" />
          </div>
          <div className="heading-text">
            <h1>Venus</h1>
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
            <h1>Venus</h1>
            <p>
              The similarity in size and density between Venus and Earth
              suggests they share a similar internal structure: a core, mantle,
              and crust. Like that of Earth, Venusian core is most likely at
              least partially liquid because the two planets have been cooling
              at about the same rate.
            </p>
            <p className="source-text">
              Source:{" "}
              <a
                href="https://en.wikipedia.org/wiki/Venus#Internal_structure"
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
            <h1>Venus</h1>
            <p>
              Much of the Venusian surface appears to have been shaped by
              volcanic activity. Venus has several times as many volcanoes as
              Earth, and it has 167 large volcanoes that are over 100 km (60 mi)
              across. The only volcanic complex of this size on Earth is the Big
              Island of Hawaii.
            </p>
            <p className="source-text">
              Source:{" "}
              <a
                href="https://en.wikipedia.org/wiki/Geology_of_Venus"
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
          <p className="stat-value">243 Days</p>
        </div>
        <div className="row">
          <p className="stat-name">Revolution Time</p>
          <p className="stat-value">224.7 Days</p>
        </div>
        <div className="row">
          <p className="stat-name">Radius</p>
          <p className="stat-value">6,051.8 KM</p>
        </div>
        <div className="row">
          <p className="stat-name">Temperature</p>
          <p className="stat-value">471°C</p>
        </div>
      </div>
    </section>
  );
}
