import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Mercury() {
  return (
    <section className="planet mercury">
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
            <img src="src\assets\planet-mercury.svg" alt="" />
          </div>
          <div className="heading-text">
            <h1>Mercury</h1>
            <p>
              Mercury is the smallest planet in the Solar System and the closest
              to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
              shortest of all the Sun's planets. Mercury is one of four
              terrestrial planets in the Solar System, and is a rocky body like
              Earth.
            </p>
            <p className="source-text">
              Source:{" "}
              <a
                href="https://en.wikipedia.org/wiki/Mercury_(planet)"
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
            <img src="src\assets\planet-mercury-internal.svg" alt="" />
          </div>
          <div className="heading-text">
            <h1>Mercury</h1>
            <p>
              Mercury appears to have a solid silicate crust and mantle
              overlying a solid, iron sulfide outer core layer, a deeper liquid
              core layer, and a solid inner core. The planet's density is the
              second highest in the Solar System at 5.427 g/cm3 , only slightly
              less than Earth's density.
            </p>
            <p>
              Source:{" "}
              <a
                href="https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
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
            <img src="src\assets\planet-mercury.svg" alt="" />
            <img
              src="src\assets\geology-mercury.png"
              alt=""
              className="geology-img"
            />
          </div>
          <div className="heading-text">
            <h1>Mercury</h1>
            <p>
              Mercury's surface is similar in appearance to that of the Moon,
              showing extensive mare-like plains and heavy cratering, indicating
              that it has been geologically inactive for billions of years. It
              is more heterogeneous than either Mars's or the Moon’s.
            </p>
            <p>
              Source:{" "}
              <a
                href="https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
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
          <p className="stat-value">58.6 Days</p>
        </div>
        <div className="row">
          <p className="stat-name">Revolution Time</p>
          <p className="stat-value">87.97 Days</p>
        </div>
        <div className="row">
          <p className="stat-name">Radius</p>
          <p className="stat-value">2,439.7 KM</p>
        </div>
        <div className="row">
          <p className="stat-name">Temperature</p>
          <p className="stat-value">430°C</p>
        </div>
      </div>
    </section>
  );
}
