import "./signup.css"
import { useRef, useState } from "react"

export default function SignUpForm(){

    const FormInfo = useRef({
        name: "",
        email: "",
        city: "",
        age: "",
        gender: "",
        PhoneOS: "Android"
    })
    const [sending, setSending] = useState(false)

    const submit = () => {
        if (!sending){
            setSending(true)
            for (const [key, value] of Object.entries(FormInfo.current)){
                if (!value.length){
                    alert(`${key} field empty!`)
                    setSending(false)
                    return
                }
            }
            fetch("http://localhost:5000/send", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(FormInfo.current)
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }
    }

    return (
        <div className="signup-background-div">
            <p className="signup-top-text">Thank you for your interest in LetsGO! Please fill out the form below to sign up as a Beta Test User for the app.</p>
            <input type="text" placeholder="Enter your name" className="signup-input" onChange={(e) => FormInfo.current.name = e.target.value}/>
            <input type="email" placeholder="Enter your email" className="signup-input" onChange={(e) => FormInfo.current.email = e.target.value}/>
            <input type="text" placeholder="Enter your city of residence" className="signup-input" onChange={(e) => FormInfo.current.city = e.target.value}/>
            <input type="number" placeholder="Enter your age" className="signup-input" onChange={(e) => FormInfo.current.age = e.target.value}/>
            <input type="text" placeholder="Enter your gender" className="signup-input" onChange={(e) => FormInfo.current.gender = e.target.value}/>
            <select defaultValue="Android" className="signup-input" onChange={(e) => FormInfo.current.PhoneOS = e.target.value}>
                <option value="Android">Android</option>
                <option value="iOS">iOS</option>
                <option value="other">other</option>
            </select>
            <button className="signup-submit-button" onClick={submit}>Submit</button>
        </div>
    )
}