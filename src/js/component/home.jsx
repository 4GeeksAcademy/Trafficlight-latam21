import React, {useState} from "react";
import "../../styles/index.css";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [activeLigh, setActiveLigh] = useState("");
	return (
		<div className="container">
			<div className="support"></div>
			<div className="box">
				<div>
					<button 
						className= {activeLigh == "red" ? "circule lighcolorred shadowred" : "circule lighcolorred"} 
						onClick={() =>{
							setActiveLigh("red")
							console.log("red" , activeLigh)
						}}>
					</button>
				</div>
				<div>
					<button 
						className= {activeLigh == "orange" ? "circule lighcolororange shadoworange" : "circule lighcolororange"} 
						onClick={() =>{
							setActiveLigh("orange")
							console.log("orange" , activeLigh)
						}}>
					</button>
				</div>
				<div>
				   	<button 
						className= {activeLigh == "green" ? "circule lighcolorgreen shadowgreen" : "circule lighcolorgreen"} 
						onClick={() =>{
							setActiveLigh("green")
							console.log("green" , activeLigh)
						}}>	
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
