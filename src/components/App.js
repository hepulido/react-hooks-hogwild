import{ React, useState} from "react";
import Nav from "./Nav";
import CardContainer from "./CardContainer/CardContainer"

import hogs from "../porkers_data";

function App() {

const [showGreased, setShowGreased]= useState(false)
 function handleShowGreased(){
	 setShowGreased(!showGreased);
 }
	return (
		<div className="App">
			<Nav handleShowGreased={handleShowGreased}/>
			<CardContainer hogData={hogs}/>
		</div>
	);
}

export default App;
