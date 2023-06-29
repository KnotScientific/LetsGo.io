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
            fetch("https://mailer.letsgoapp.io/send", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(FormInfo.current)
            })
            .then(res => res.json())
            .then(data => {
                if (data.success){
                    alert("Success!")
                    window.location.reload()
                }
            })
        }
    }

    return (
        <div className="signup-background-div">
                        <div className="form-wrapper">
            <p className="signup-top-text">Thank you for your interest in LetsGO! Please fill out the form below to sign up as a Beta Test User for the app.</p>
            <input type="text" placeholder="Name" className="signup-input" onChange={(e) => FormInfo.current.name = e.target.value}/>
            <input type="email" placeholder="Email" className="signup-input" onChange={(e) => FormInfo.current.email = e.target.value}/>
            <input type="text" placeholder="City" className="signup-input" onChange={(e) => FormInfo.current.city = e.target.value}/>
            <select defaultValue="Age" required className="signup-input" onChange={(e) => FormInfo.current.age = e.target.value}>
                <option value="" selected hidden>Age</option>
                <option value="15-19">15-19</option>
                <option value="20-25">20-25</option>
                <option value="26-32">26-32</option>
                <option value="33-39">33-39</option>
                <option value="40-50">40-50</option>
                <option value="51+">51+</option>
            </select>
            <input type="text" placeholder="Gender" className="signup-input" onChange={(e) => FormInfo.current.gender = e.target.value}/>
            <select defaultValue="Android" className="signup-input" onChange={(e) => FormInfo.current.PhoneOS = e.target.value}>
                <option value="Android">Android</option>
                <option value="iOS">iOS</option>
                <option value="other">other</option>
            </select>
            <button className="signup-submit-button" onClick={submit}>{sending ? <div className="letter-changer"></div> : "Submit"}</button>
            </div>
        </div>
    )
}