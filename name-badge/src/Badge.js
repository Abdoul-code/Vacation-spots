import React from "react"
function Badge(props){
    return(
        <div className="badge-box">
             <p> Name:{props.firstName} {props.lastName}</p>
                        <p> Email:{props.email}</p>
                        <p> Phone:{props.phone}</p>
                        <p> Place of birth:{props.placeOfbirth}</p>
        </div>
    )
}


export default Badge