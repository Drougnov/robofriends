import React, { useState, useEffect } from "react";
import CardList from "./components/CardList";

const App =()=> {
  const [robotData, setRobotData] = useState([]);
  const [originalRobotData, setOriginalRobotData] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setRobotData(data)
      setOriginalRobotData(data)
    })
  },
  [])

  function onSearchChange(event) {
    const inputValue = event.target.value.toLowerCase();
    const filteredRobots = originalRobotData.filter((robot) => {
      return robot.name.toLowerCase().includes(inputValue) || robot.email.toLowerCase().includes(inputValue);
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
