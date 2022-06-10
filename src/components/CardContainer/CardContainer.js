import {React} from 'react';
import HogCard from "./HogCard"
import {Card} from "semantic-ui-react"
function CardContainer({hogData, showGreased}){
    const hogDataCopy = showGreased ? hogData.filter(hog => hog.greased) : [...hogData]
    return(
<Card.Group itemsPerRow={4}>
        {hogDataCopy.map((hog)=>{
            return <HogCard key={hog.name} 
            name={hog.name} 
            image={hog.image} 
            greased={hog.greased} 
            specialty={hog.specialty} 
            weight={hog.weight} 
            highestMedal={hog.highestMedal}/>
        })}
        </Card.Group>
    );
}

export default CardContainer;