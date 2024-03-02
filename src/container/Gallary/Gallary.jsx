import react from "react"
import "./gallary.css"
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"
import { Subheading } from "../../component"
// import {food1, food2, food3, food4, food5,food6, food7} from "../../constant/asset"
import food1 from "../../constant/asset/food1.png"
const images =[food1, ]
const Gallary =()=>{

    const scrollRef = react.useRef(null)
    const scroll = (direction )=>{
     const {current} = scrollRef

     if (direction === "left"){
        current.scrollLeft -=300;
     }
     else{
        current.scrollLeft +=300;
     }
    }
    return(
        <div className="app__gallary flex__center">
             <div className="app__gallary-content">
                  <Subheading title="Instagram"/>
                  <h1 className="headtext__comorrant">Photo Gallary</h1>
                  <p className="p__opensans" style={{color: "#aaaa", marginTop :"2rem"}}>Winding
                   up, we can go over the main points of this unit. The Structured Query 
                   Language (SQL) is regarded as the standard relational data
                  base language. A typical SQL consists of several parts which include: Data definition
                   language (DDL), Interactive data manipulation language (DML), Embedded data 
                   manipulation language</p>
                   <button className="custom__button" type="button">View More</button>
             </div>

             <div className="app__gallary-images">

                   <div className="app__gallary-images_container" ref={scrollRef}> 
                       {images.map((img, index)=>{
                         <div className="app__gallary-images-card flex__center key={gallary_image-${index +1}}">
                            <h2>gallary</h2>
                           <img src={img} alt="gallary images" />
                         </div>
                       })}
                   </div>

                   <div className="app__gallary-images_arrow">
                        <BsArrowLeftShort className="gallary-arrow-icon" onClick={()=> scroll("left")}/>
                        <BsArrowRightShort className="gallary-arrow-icon" onClick={()=> scroll("right")}/>
                        
                   </div>
             </div>
        </div>
    )
}
export default Gallary