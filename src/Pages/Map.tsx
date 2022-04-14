import "../Style/Map.css";
import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import BoxMap from "../Components/Map";

export default function Map() {
    const [lng, setLng] = useState(34.7087);
    const [lat, setLat] = useState(31.7762);

    return (
        <div className='map-page-container'>
            <div className='form-container'>
                <h1>מפה</h1>
                <div className="lat-log-container">
                    <TextField
                        style={{backgroundColor: "whitesmoke"}}
                        label='Enter Latitude'
                        variant='outlined'
                        type='number'
                        onChange={(e: any) => setLat(parseFloat(e.target.value))}
                        value={lat}
                    />
                    <TextField
                        style={{backgroundColor: "whitesmoke"}}
                        label='Enter Longitude'
                        variant='outlined'
                        type='number'
                        onChange={(e: any) => setLng(parseFloat(e.target.value))}
                        value={lng}
                    />
                </div>
            </div>
            <div className='map-container'>
                <BoxMap lng={lng} setLng={setLng} lat={lat} setLat={setLat}/>
            </div>
        </div>
    );
}
