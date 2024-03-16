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
            </div>

            <div className="app__wrapper_info">
                  <img src="" alt="" />
            </div>
        </div>
    )
}
export default Findus