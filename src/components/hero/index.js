import React, { useState, useEffect} from "react";

const heroes = [
  "./hero1.jpg",
  "./hero2.jpg",
  "./hero3.jpg",
  "./hero4.jpg",
  "./hero5.jpg"
];

function hero(){
  const [value, setValue] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v + 1) % 4);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img src={heroes[value]} alt="hero" />
    </div>);
  }

  export default hero;