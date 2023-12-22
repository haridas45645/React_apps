
import "./ecom.css"
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

function Signin(){

    const [email, setEmail] = useState("")
    const [pswd, setPswd] = useState("")
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
    const app = initializeApp(firebaseConfig);
    const auth = getAuth()


    const SubmitData=(event) => {
        event.preventDefault()



        let obj = {
            email: email,
            password: pswd
        }
        signInWithEmailAndPassword(auth, obj.email, obj.password)

            .then(() => {
                alert("successfully Login...")
                navigate("/Ecomdata")
            })
            .catch(() => {
            alert("error")
            })
    }


    return(
        <div className="container my-5" style={{ width: "400px" }}>
        <div className="card p-4">
            <div className="card-title">
                <h3 className="text-center">Login</h3>
            </div>

            <div card-body>
                <form onSubmit={SubmitData}>  

                   
                        <label class="form-label">Email </label>
                        <input value={email} type="email" onChange={e => setEmail(e.target.value)} required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        {/* <span id=""></span> */}
                        <br/>
                   
                        <label class="form-label">Password</label>
                        <input value={pswd} type="password" onChange={e => setPswd(e.target.value)} required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        {/* <span id="ps"></span> */}
                        <br/>
                    <button type="submit" class="btn btn-primary">Login</button>

                </form>
                <div>
                    <p className="para">if you don't have a account 
                        <Link to='/' id="link">  Register</Link>   here
                    </p>
                </div>


            </div>


        </div>





    </div>
    )
}
export default Signin;