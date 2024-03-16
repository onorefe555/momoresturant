import react from "react"
import "./findus.css"

import { Subheading, Menuitem} from "../../component";
import { Data  } from "../../constant/";


const Findus =()=>{
    return(
        <div className="app__bg app__wrapper section__padding" id="contact">
            <div className="app__wrapper-info">
                <Subheading title="Contact Us"/>
                <h1 className="headtext_comorant" style={{marginBottom: "3rem"}}>Find Us</h1>
                    <div className="app__wrapper_content">
                       <p className="p__opensan" style={{color:"#dcca87"}} > BLOCK K 4767 Apapa Express Way Isolo Oshodi</p> 

                         <p className="p__comorant"> Opening Hours</p>

                         <p className="p__opensan"> Monday - Friday 10am : 6:00pm</p>

                         <p className="p__comorant"> Saturday - Sunday 10am - 3:00pm </p>
                    </div>
                    <button className="custom_button">Visit</button>
            </div>

            <div className="app__wrapper_info">
                  <img src="" alt="" />
            </div>
        </div>
    )
}
export default Findus