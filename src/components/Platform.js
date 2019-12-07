import React from "react";
import Rocket from "./Rocket";

const Platform = ({addRocket, removeRocket, rockets, launchRocket}) => {
  return <div className="platform">
    <div className="platform__buttons">
	<button onClick={addRocket} >Dodaj rakietę</button>
	<button onClick={removeRocket} >Usuń rakietę</button>
    </div>
    <div className="platform__rockets">
		{rockets.map((rocket, i)=>{
			return <Rocket id={i} launch={launchRocket} key={i} launched={rocket.isLaunched} counter={rocket.counter} />
		})}
    </div>
  </div>
};

export default Platform;
