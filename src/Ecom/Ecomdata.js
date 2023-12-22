
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "./Pagination";
import UserAuth from "./user";


// import Detail from "./datadetail";

function Ecomdata() {
    const navigate = useNavigate()
    let currentUser = UserAuth()


    // signOut

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


    const SubmitData = (event) => {
        event.preventDefault()

        signOut(auth)

            .then(() => {
                alert("successfully Logout...")
                navigate("/Signin")
            })
    }


    // ecomdata 

    const [data, setData] = useState([])

    useEffect(() => {

        fetch("https://ecommerce-app-api-xias.onrender.com/E-commerce")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                console.log(resp)

                setData(resp)
            })
    }, [])

    // search 

    const [value, setValue] = useState("")
    const change = (e) => {
        setValue(e.target.value)
    }

    // async-await 

    const search = async (event) => {
        event.preventDefault()
        return await axios.get(`https://ecommerce-app-api-xias.onrender.com/E-commerce?q=${value}`)

            .then((res) => {
                setData(res.data)
                setValue("")

            })
            .catch(() => {
                alert("error")
            })
    }

    // sort 

    const option = ["brand", "price"]
    const [sort, setSort] = useState("")

    const sorting = async (e) => {

        e.preventDefault()
        let value = e.target.value
        setSort(value)

        return await axios.get(`https://ecommerce-app-api-xias.onrender.com/E-commerce?_sort=${value}&_order=asc`)

            .then((res) => {
                setData(res.data)

            })
            .catch(() => {
                alert("error")                                             
            })

    }

    // add-cart

    const Addcart = (id) => {

        fetch("https://ecommerce-app-api-xias.onrender.com/E-commerce/" + id)
            .then((res) => {
                return res.json()

            })

            .then((resp) => {
                // console.log(resp)
                fetch("https://ecommerce-app-api-xias.onrender.com/Add-cart", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(resp)
                })
                    .then((resp) => {
                        // console.log(resp)

                    })
                    .catch(() => {
                        alert("error")
                    })
            })
    }

    // addcart count 

    const [count, setCount] = useState(0)
    useEffect(() => {
        fetch("https://ecommerce-app-api-xias.onrender.com/Add-cart")

            .then((res) => {
                return res.json()
            })

            .then((resp) => {
                setCount(resp)


            })
    })
//  deatials 

const details=(id)=>{
navigate("/datadetail/"+id)
}


    // Pagination

    const [page, setPage] = useState(1)
    const [records, setRecords] = useState(10)
    let lr = page * records
    let fr = lr - records

    let mydata = data.slice(fr, lr)

    const updatePage = (n) => {
        setPage(n)
    }
    const Next = () => {
        setPage(page + 1)
    }

    const Prev = () => {
        setPage(page - 1)
    }
    return (

        <div className="container-fluid">

            <div className="nav">
                <div>
                <h6 id="userauth"><i class="fa-solid fa-user"></i> {currentUser?.email}</h6>
                </div>
                <div className="sort">
                    <select value={sort} onChange={sorting} >
                        <option>sort</option>
                        {option.map((item) => (
                            <option>{item}</option>
                        ))}

                    </select>
                </div>

                <div className="addcart">
                    <Link to='/Addcart' className="link">
                        <i class="fa-solid fa-cart-shopping" ></i> <span >{count.length}</span>
                    </Link>
                </div>

                <div>
                    <form onSubmit={SubmitData}>
                        <div className="logout">

                            <button type="submit" className="btn btn-danger" ><i class="fa-regular fa-user"></i></button>
                        </div>
                    </form>
                </div>

                <div>
                    <form onSubmit={search}>
                        <div className="search">
                            <input value={value} type="text" placeholder="Search for Products,Brand and more" className="form-control" onChange={change} aria-describedby="emailHelp" />
                        </div>
                    </form>
                </div>

            </div>
            <div className="ecomdata">

                {mydata.map((item) => (
                    <div id="data">

                        <p><img src={item.image} id="img" /> </p>
                        <h4>{item.brand}</h4>
                        <p>{item.name}</p>
                        <h6><i class="fa-solid fa-indian-rupee-sign"></i> {item.price}</h6>
                        <button id="addcartbtn" onClick={() => { Addcart(item.id) }} >Add-cart</button>
                    
                            <button id="detailsbtn" onClick={() => { details(item.id) }}>Details</button>
                    
                    </div>

                ))}

            </div>

            < Pagination total={data.length} record={records} update={updatePage} Next={Next} Prev={Prev} />


        </div>


    )

}
export default Ecomdata;