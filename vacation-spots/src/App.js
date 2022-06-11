import React from "react"
import Card from "./Card"
import vacationSpots from "./vacationSpots"
function App(){

    const bgColorSwitcher = (season) => {
        if(season === "Spring"){
            return "red"
        }else if (season === "Winter"){
            return "blue"
        }else if(season === "Fall"){
            return "orange"
        }else {
            return "green"
        }
    }

    const vacationComponent = vacationSpots.map(vacation => <Card 
        place = {vacation.place}
        price = {vacation.price}
        timeToGo = {vacation.timeToGo}
        bgColorSwitcher={bgColorSwitcher}


        />)
    return(
        <div>
            {vacationComponent}
        </div>
    )
}

export default App