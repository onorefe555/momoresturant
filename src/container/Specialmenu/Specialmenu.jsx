import react from "react";
import "./specialmenu.css"
import { Subheading, Menuitem} from "../../component";
import { Data } from "../../constant";
import flasks from "../../constant/asset/flasks.png"

const Specialmenu =()=>{
    return(
        <div className="app__specialmenu flex__center section__padding " id="menu">
              <div className="app__specialmenu-title">
                <Subheading title="Menu that fits you pallete"/>
                <h1 className="headtxt__comorant">Today's Special</h1>
              </div>

              <div className="app__specialmenu-menu">
                   <div className="app__specialmenu-menu-wine flex-center">
                         <p className="app__specialmenu-menu-heading">Wine & Beer</p> 

                          <div className="app__specialmenu-menu-item">
                            <Data text="Calcium    ________________________   10%"/>
                            <Data text="Magnesium  _______________________   30%"/>
                            <Data text="Phosorous  _______________________   50%"/>
                            <Data text="Potasium   _________________________   70%"/>
                            <Data text="Lithium    _________________________   80%"/>
                            <Data text="Lithium    _________________________   100%"/>
                          </div>                   
                    </div> 

                    <div className="app__specialmenu-menu-images">
                         <img src={flasks} alt="menu img" />
                    </div>
                     
                    <div className="app__specialmenu-menu-msg">
                            <Data text="In the relational model, related 
                            records are linked together with a ―key‖. For instance,
                             a common use of a database system is to track information
                              about users, their name, login information,"/>

                            <Data text="In the relational model, related 
                            records are linked together with a ―key‖. For instance,
                             a common use of a database system is to track information
                              about users, their name, login information,"/>

                            <Data text="In the relational model, related 
                            records are linked together with a ―key‖. For instance,
                             a common use of a database system is to track information
                              about users, their name, login information,"/>

                            <Data text="In the relational model, related 
                            records are linked together with a ―key‖. For instance,
                             a common use of a database system is to track information
                              about users, their name, login information,"/>
                          </div> 
              </div>
        </div>
    )
}
export default Specialmenu