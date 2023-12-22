import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function Detail() {
    
const {id}=useParams()
    const [data, setData] = useState()

    useEffect(() => {
        fetch("https://ecommerce-app-api-xias.onrender.com/E-commerce/" + id)
            .then((res) => {
                return res.json()
            })

            .then((resp) => {
                setData(resp)
                // console.log(resp)
            })
    }, [])

    return (

    
             <div >

{data &&
    <div class="details">

        <p><img src={data.image} id="im" /> </p>
        <div id="dlist">
        <h4>{data.brand}</h4>
        <p>{data.name}</p>
        <h6>Price: <i class="fa-solid fa-indian-rupee-sign"></i> {data.price}</h6>
        <p>Material: {data.material}</p>
        <p>Color: {data.color}</p>
        </div> 
        <div id="highlight">
        <p>Highlights: {data.highlights}</p>
        </div>
       
    </div>

}

</div>


    )
}
export default Detail;