import react from "react";
import "./aboutus.css"
import knife from "../../constant/asset/knife.png"
import spoon2 from "../../constant/asset/spoon2.png"
const Aboutus =()=>{
    return(
        <div className="app__aboutus app__bg flex__center section__padding" id="aboutus">
             

              <div className="app__aboutus-overlay flex__content">
                  <div className="app__aboutus-content-about">
                      <h1 className="headtext__cormorant">About Us</h1>
                      <img src={spoon2} alt="spoon" className="spoon__img" />
                      <p className="p__opensans">A healthy diet typically includes nutrient-dense
                       foods from all of the major food groups, including lean proteins, whole grains, 
                       healthy fats, and fruits and vegetables of many colors. Healthy eating habits
                        also include replacing foods that contain trans fats, added salt, and sugar with
                         more nutritious options.</p>
                         <button type="button" className="custom__button">Know More</button>
                  </div>
                  
                  <div className="app__aboutus-content__knife flex flex__content">
                      <img src={knife} alt="knife" className="aboutus__knife" />
                  </div>

                  <div className="app__aboutus-content-history">
                      <h1 className="headtext__cormorant">Our History</h1>
                      <img src={spoon2} alt="spoon" className="spoon__img" />
                      <p className="p__opensans">A healthy diet typically includes nutrient-dense
                       foods from all of the major food groups, including lean proteins, whole grains, 
                       healthy fats, and fruits and vegetables of many colors. Healthy eating habits
                        also include replacing foods that contain trans fats, added salt, and sugar with
                         more nutritious options.</p>
                         <button type="button" className="custom__button">Know More</button>
                  </div>
              </div>
        </div>
    )
}
export default Aboutus