import React from "react";
import {Link} from "react-router-dom"
import "../Style/Home.css"
import {Button} from "@mui/material";

export default function Home() {
    return (
        <div className="home-container">
            <h1>היי פרופדו </h1>
            <p>תודה רבה על מטלה מעניינת חג שמח לכולם :)</p>

            <div className="buttons-container">
                <Button variant="contained" >
                    <Link to={"/map"}  >מפה</Link>
                </Button>
                <Button variant="contained" >
                    <Link to={"/real-estate"}>נכסים</Link>
                </Button>
            </div>
        </div>
    )
}
