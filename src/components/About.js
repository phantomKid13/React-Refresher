import React from 'react'
import { useState } from 'react'
import '../css/About.css'

export default function About(props) {

    let lightStyle = {
        color : "black",
        backgroundColor : "white"
    }
    
    let darkStyle = {
        color : "white",
        backgroundColor : "#212529"
    }

    let [myStyle, setMyStyle] = useState(lightStyle)
    let [btnText, setbtnText] = useState("Enable Dark Mode")

    const toggleStyle = (event) =>{
        let elem = event.target
        let icon = document.getElementsByClassName("accordion-button")

        if(myStyle.color==="black"){
            setMyStyle(darkStyle)
            elem.classList.remove("btn-dark")
            elem.classList.add("btn-light")
            for(let i = 0; i < icon.length; i++) {
                icon[i].classList.add("dark");
            }
            setbtnText("Enable Light Mode")
        }
        else{
            setMyStyle(lightStyle)
            elem.classList.remove("btn-light")
            elem.classList.add("btn-dark")
            for(let i = 0; i < icon.length; i++) {
                icon[i].classList.remove("dark");
            }
            setbtnText("Enable Dark Mode")
        }
    }

    return (
        <div className="container my-3" style={myStyle}>
            <div className="accordion py-3" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <b>Accordion Item #1</b>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <b>Accordion Item #2</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            <b>Accordion Item #3</b>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary btn-dark mb-3" onClick={toggleStyle}>{btnText}</button>
        </div>
    )
}
