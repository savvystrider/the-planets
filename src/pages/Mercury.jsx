import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import planetData from "../data.json";
import { useEffect, useState } from "react";

export default function Mercury() {
  const [mobileView, setMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const planet = planetData[0];

  const mobileTabs = (
    <TabList className="mobile-tab-list">
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
  );

  const desktopTabs = (
    <TabList className="desktop-tab-list">
      <Tab className="desktop-tab" selectedClassName="active-desktop-tab">
        <span>01</span>
        Overview
      </Tab>
      <Tab className="desktop-tab" selectedClassName="active-desktop-tab">
        <span>02</span>
        Internal Structure
      </Tab>
      <Tab className="desktop-tab" selectedClassName="active-desktop-tab">
        <span>03</span>
        Surface Geology
      </Tab>
    </TabList>
  );

  return (
    <section className="planet mercury">
      <Tabs defaultIndex={0}>
        {mobileView && mobileTabs}
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
        {!mobileView && desktopTabs}
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
