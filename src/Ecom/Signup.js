
import "./ecom.css"
import { useState } from "react"
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {  useNavigate,Link } from "react-router-dom";


function Signup(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pswd, setPswd] = useState("")
    const [cpswd, setCpswd] = useState("")
    const [data, setData] = useState("")
    const [data1, setData1] = useState("")

     const navigate=useNavigate()


const firebaseConfig = {
  apiKey: "AIzaSyB1GSHHUaBsfn9PtIiss8ihDb8N85hEzC4",
  authDomain: "ecomauth-d68fc.firebaseapp.com",
  projectId: "ecomauth-d68fc",
  storageBucket: "ecomauth-d68fc.appspot.com",
  messagingSenderId: "890678004532",
  appId: "1:890678004532:web:4a4100efde195de020b361",
  measurementId: "G-DPG875096K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()//email and password

const regu =()=>{
    if (pswd != cpswd) {
        setData("password does not match...")
    }
    else{
        setData("")
    }
    
}


const SubmitData=(event)=>{
    event.preventDefault()
regu()
    const pattern=/^[a-z]+[0-9]+[\!@#$%^&*]$/

    if(pattern.test(pswd)) {

          setData1("")
          
    let obj={
        email:email,
        password:pswd
    }
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(() => {
        alert("successfully register...")
        navigate("./Signin")
    
    })
    .catch(() => {
        alert("error...")
    })
}
else{
    setData1("create strong password...")
}

}

    return(
        <div className="container my-3 " style={{ width: "380px" }}>
        <div className="card p-4">
            <div className="card-title">
                <h3 className="text-center">Create account</h3>
            </div>

            <div card-body>
                <form onSubmit={SubmitData}>  

                        <label class="form-label">Name</label>
                        <input value={name} type="text" onChange={e=>setName(e.target.value)} required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <br/>
                    
                        <label class="form-label">Email </label>
                        <input value={email} type="email"  onChange={e=>setEmail(e.target.value)} required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <br/>

                        <label class="form-label">Password</label>
                        <input value={pswd} type="password"  onChange={e=>setPswd(e.target.value)} required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <span id="pswd" style={{color:"red"}}>{data1}</span>
                        <br/>
                      
                        <label class="form-label">Confirm Password</label>
                        <input value={cpswd} type="password"  onChange={e=>setCpswd(e.target.value)} required class="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" />
                        <span id="pswd" style={{color:"red"}}>{data}</span>
                       <br/>
                    <button type="submit " class="btn btn-primary">Signup</button>

                </form>

                <div>
                    <p className="para">if you have already account
                        <Link to='/Signin' id="link"> Login</Link> here
                    </p>
                </div>


            </div>


        </div>


    </div>


        
    )
}
export default Signup;