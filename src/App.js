import React, { useState } from "react";
import CardList from "./components/CardList";
import { robots } from "./data/robots";

const App =()=> {
  const [robotData, setRobotData] = useState(robots);

  function onSearchChange(event) {
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
  
    setRobotData(filteredRobots);
  }

  return(
    <>
      <header>
        <h1 className="header-logo">Robofriends</h1>
        <input className="header-input" type="text" onChange={onSearchChange} placeholder="Search robots..." autoFocus />
      </header>
      <main>
        <CardList robotData={robotData} />
      </main>
    </>
  )
}

export default App;