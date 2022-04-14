import React from 'react';
import './Style/App.css';
import {
    Routes,
    Route,
} from "react-router-dom";
import RealEstate from "./Pages/RealEstate";
import Map from "./Pages/Map"
import Home from "./Pages/Home"
import ApiDataContext from "./Context/ApiDataContext";
import useLogic from "./Logic/AppLogic"

function App() {

    const {jsonData} = useLogic()

    return (
        <div className="App">
            <ApiDataContext.Provider value={jsonData} >
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/real-estate" element={<RealEstate/>}/>
                    <Route path="/map" element={<Map/>}/>
                </Routes>
            </ApiDataContext.Provider>
        </div>
    );
}

export default App;
