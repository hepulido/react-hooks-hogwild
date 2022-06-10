/* eslint-disable react/jsx-pascal-case */
import {React,useState} from 'react';
import {Card, Image} from "semantic-ui-react"

function HogCard({name, image, greased, specialty ,weight, highestMedal}) {
    const [showData, setData] = useState(false)

    function handleToggleData(){
        setData(oldState=>!oldState)
    }
    function renderDetails(){
        return ( 
        <>
        <div className="specialty">{specialty}</div>
        <div className="greased">{greased}</div>
        <div className="weight">{weight}</div>
        <div className="highestMedal">{highestMedal}</div>
        </>)
    }
return(
<Card onClick={handleToggleData}>
 <Image src={image}/>
    <Card.content>
        <Card.Header>{name}</Card.Header>
        {showData ? renderDetails():null}
       
    </Card.content>
</Card>
)


}

export default HogCard;