import react from "react";
import "./header.css"
import { Images } from "../../constant";
import { Subheading } from "../../component";
import chickenrepublic from "../../constant/asset/chickenrepublic.jpg"
const Header= ()=>{
return(
    <div className="app__header app__wrapper section__padding" id="home">
         <div className="app__wrapper_info">
               <Subheading title="Chase the new flavour"/>
               <h1 className="app__header-h1">The Key to fine Dinning</h1> 
               <p className="p__opensans" style={{margin:"2rem 0"}}>Paying great attention to every small
                details is the key to successful fine dinning establishment. From the selection of tanle
                 ware , sttemware to the server uniform is to match with the aesthetic and food style 
                of the restuarant.</p>
               <button type="button" className="custom__button">Explore Menu</button>
         </div>

         <div className="app__wrapper-img">
                <img src={chickenrepublic} alt="chickenrepublic" />
         </div>
    </div>
)
}
export default Header