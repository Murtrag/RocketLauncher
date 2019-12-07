import React from "react";

const imgSrc = "https://www.raletta.in/images/rocket.gif";

const Rocket = ({ launched, counter, launch, id }) =>{
	console.log(counter);
  return <div className="rocket">
    <img
      alt="rocket"
      src={imgSrc}
      className={`rocket__image ${launched ? 'launched': ''}`}
    />
    <button onClick={()=>launch(id)} className="rocket__button">{ counter < 5 ? counter : "Launch"}</button>

  </div>
};

export default Rocket;
