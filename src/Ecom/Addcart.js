import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function Addcart() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://ecommerce-app-api-xias.onrender.com/Add-cart")

            .then((res) => {
                return res.json()
            })

            .then((resp) => {
                setData(resp)
                // console.log()

            })

    }, [])

    // remove 


    const deleted = (id) => {

        fetch("https://ecommerce-app-api-xias.onrender.com/Add-cart/" + id, {
            method: "DELETE"
        })
            .then(() => {
                window.location.reload()
            })
            .catch(() => {
                alert("error")
            })
    }

    // total price 

const [total,setTotal]=useState(0)
useEffect(()=>{

    const initial=0
    const total=data.reduce((sum,current)=> sum + parseFloat(current.price)  ,initial)
    setTotal(total)

})

    return (
        <div className="container-fluid">

            <div className="head">

                <Link to='/Ecomdata' >
                    <i class="fa-solid fa-arrow-left-long"></i>

                </Link>
                <h6 style={{ marginLeft: "100px" }}>Add-Cart</h6>

                <Link style={{ marginLeft: "5px" }} id="link">
                    <i class="fa-solid fa-cart-shopping" ></i> <span >{data.length}</span>
                </Link>

            </div>



            <div className="addcartdata">
                {data.map((item) => (
                    <div id="cartdata">
                        <div className="datas">

                            <div id="cartimage">
                                <p><img src={item.image}  /> </p>
                                <p style={{ color: "darkgreen" }}>FREE Delivery</p>
                            </div>

                            <div className="left">
                                <h4>{item.brand}</h4>
                                <p>{item.name}</p>
                                <h6><i class="fa-solid fa-indian-rupee-sign"></i> {item.price}</h6>
                                <p>Delivery in 2 Days</p>

                            </div>
                        </div>
                        <hr />
                        <div className="cartbtn">
                            <button onClick={() => { deleted(item.id) }} id="remove">Remove</button>
                            <button id="buybtn">Buy now</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="totalprice">
                <div id="price">
                <p>price<span>({data.length} items)</span> = {total}</p>
                <p>Total<span id="total"> = {total}</span></p>
                </div>
            </div>

        </div>

    )
}
export default Addcart;
