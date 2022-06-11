import { render } from "@testing-library/react"
import "./App.css"
import Badge from "./Badge.js"
import React, {useState}from "react"
import { map } from "async"

function App (){
    const [inputData,setInputData] = useState({firstName:" ", lastName:""})
    const [email, setEmail]= useState("")
    const [phone, setPhone] = useState([])
    const [placeOfbirth, setPlaceofbirth] = useState("")
    const [badgeList, setBadgeList]= useState([])

    const mapBadge = badgeList.map(item => 
                    <Badge firstName = {item.firstName}/>)

    function handleChange(event){
        const {name , value} = event.target
        setInputData( prevInputData =>{
            return{
                ...prevInputData,
                [name]: value
            }
        }
        
        ) 
    }
    function handleBtn (event){
        event.preventDefault()
        setPhone(prevPhone => [...prevPhone, inputData])

    }

    return(
        <>
              <div className="form-box">
                    <form>
                        <input 
                        type="text" 
                        value={inputData.firstName}
                        name="firstName" 
                        placeholder="Fist Name"
                        onChange={handleChange}/>
                        <br/>
                        <input 
                        type="text" 
                        value={inputData.lastName}
                        name="lastName" 
                        placeholder="Last Name"
                        onChange={handleChange}/>
                        <br/>
                        <input 
                        type="text" 
                        value={email}
                        name="email" 
                        placeholder="Email"
                        onChange={handleChange}/>
                        <br/>
                        <input 
                        type="number" 
                        value={phone}
                        name="phone" 
                        placeholder="Phone"
                        onChange={handleChange}/>
                        <br/>
                        <input 
                        type="text" 
                        value={placeOfbirth}
                        name="placeOfbirth" 
                        placeholder="Place of Birth"
                        onChange={handleChange}/>
                        <br/>

                        <textarea value={"Tell us about yourself"} onChange={handleChange}/>
                        <br/>
                        <button type="button" onClick={handleBtn}>Submit</button>
    
                    </form>
                </div>
                        <div>
                       {mapBadge}
                        
                        </div>
        </>
    )

}
export default App

