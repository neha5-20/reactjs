import React from "react";
import './App.css';
import Button from "./Button";

const App = () => {
  return (
    <div className="App app_con">
      <video src="/videos/vid1.mp4" loop autoPlay muted></video>
      <h1>HELLO WORLD</h1>
      <div className="p">The Earth is almost Five billion years old but, life has existed only for the last 150 million to 200 million years. This is estimated to be about 5% of its lifetime.After years and years of revolving and rotating, the planet is slowing down too. Millions of years ago, a day was only 20 hours long. A few million years later, it will be 27 hours long.Global warming is likely to impact Maldives heavily, as it is the country with a lowest height above sea level of 1.8 meters and will go under water.
         There are only 27 glaciers left in Montana’s Glacier National Park, versus 150 in 1910. The ocean’s circulation system, ocean conveyor belt’s alteration could cause a mild ice age in Europe.There are some interesting facts about the world related to the size of Earth, Sun & Jupiter.It is said that if the size of the sun would have been of a beach ball then Jupiter’s size would be of a golf ball and Earth’s size would be of a pea</div>
      <Button buttonText="GET STARTED"/>
    </div>
  );
}

export default App;
