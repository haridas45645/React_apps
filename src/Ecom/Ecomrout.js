
import "./ecom.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
import Ecomdata from "./Ecomdata";
import Addcart from "./Addcart";
import Detail from "./datadetail";




function Ecomrout() {
    return (
        <div>

                <Router>
                
                    <Routes>
                        <Route path="/" element={<Signup />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/ecomdata" element={<Ecomdata />} />
                        <Route path="/addcart" element={<Addcart/>} />
                        <Route path="/datadetail/:id" element={<Detail/>} />
                       
                    </Routes>
                </Router>
        </div>
    )
}
export default Ecomrout;