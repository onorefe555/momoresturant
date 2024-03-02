import react from "react";
import  "./App.css"
import { Footers, Menuitem, Navbar, Subheading } from "./component";
import {Data, Images} from "./constant";
import {Aboutus, Chef,  Findus, Footer, Gallary, Header, Menu, Specialmenu, Intro, Laurel  } from "./container"
import {BrowserRouter, Routes, Route} from "react-dom"


const App =()=>{
    return(
        <div>
             <Navbar />
             <Header/>
             <Aboutus/>
             <Specialmenu/>
             <Chef/>
             <Intro/>
             <Laurel/>
             <Gallary/>
            <Findus/>
            <Footers/>
        </div>
    )
}
export default App