import React from "react"
import vacationSpots from "./vacationSpots"

function Card(props){
    const { bgColorSwitcher } = props

    bgColorSwitcher(props.timeToGo)
    console.log(props.timeToGo)
    return(
        <div style={{backgroundColor: bgColorSwitcher(props.timeToGo)}}>
            <h3>Place:{props.place}</h3>
            <h3>Time:{props.timeToGo}</h3>
            <h3>Price:{props.price}</h3>
        </div>
    )
}

export default Card