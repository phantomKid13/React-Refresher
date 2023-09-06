import React from 'react'
import { useState } from 'react'

export default function FormControl(props) {

    const modeState = props.mode === "dark" ? "white" : "black"

    const fieldStyle = props.mode==="dark"?{
        backgroundColor: "#1f2226",
        color: "white"
    }:{
        backgroundColor : "white",
        color : "black"
    }

    const [info, setInfo] = useState({
        email: '',
        password: '',
        text: ''
    })

    const handleOnClick = (event) => {
        let className = event.target.className
        let out = undefined

        if (className.includes('upper')){
            out = info.text.toUpperCase()
            props.setAlertFn("Converted to UpperCase","success")
        }
        else if (className.includes('lower')){
            out = info.text.toLowerCase()
            props.setAlertFn("Converted to LowerCase","success")
        }
        else if (className.includes('inv')) {
            const invstr = str => [...str].map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('')
            out = invstr(info.text)
            props.setAlertFn("Inverted Case","success")
        }
        else
            out = ''
        setInfo({
            ...info,
            text: out
        })
    }

    const handleOnChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        if (name === "email")
            setInfo({
                ...info,
                email: value
            })
        else if (name === "password")
            setInfo({
                ...info,
                password: value
            })
        else
            setInfo({
                ...info,
                text: value
            })
    }

    return (
        <div className="mt-3 container" style={{ color: modeState }}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Enter Email address</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete="off" style={fieldStyle} value={info.email} onChange={handleOnChange} />
                <div id="emailHelp" className={`form-text text-${modeState}`}><i>We'll never share your email with anyone else.</i></div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Enter Password</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" style={fieldStyle} value={info.password} onChange={handleOnChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleText" className="form-label">Enter Text</label>
                <textarea name="text" id="exampleText" className="form-control" rows={"5"} style={fieldStyle} value={info.text} onChange={handleOnChange}></textarea>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>

            <div className="mb-3">
                <button className="btn btn-primary btn-upper me-2" onClick={handleOnClick}>UpperCase</button>
                <button className="btn btn-primary btn-lower me-2" onClick={handleOnClick}>LowerCase</button>
                <button className="btn btn-primary btn-inv me-2" onClick={handleOnClick}>InvertCase</button>
                <button className="btn btn-primary btn-clr me-2" onClick={handleOnClick}>Clear</button>
            </div>

            <div className="mb-3">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" style={fieldStyle}>Number of words : {info.text.split(' ').length}</li>
                    <li className="list-group-item" style={fieldStyle}>Number of chars : {info.text.length}</li>
                </ul>
            </div>

        </div>
    )
}
