import React from "react";
import "../Style/CardContainer.css"
import ApartmentCard from "./ApartmentCard"
import SearchBar from "./SearchBar";
import RoomFilter from "./RoomFilter";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import useLogic from '../Logic/CardsContainerLogic'
import {unicodeToChar} from "../Logic/Utiles";
import {PropertiesType} from "../react-app-env";

export default function CardsContainer() {

    const {
        setRoomsFilter,
        setPriceFilter,
        priceFilter,
        roomsFilter,
        roomsKinds,
        search,
        setSearch,
        data
    } = useLogic()


    if (!data) {
        return <div style={{height: "100%", width: "100%"}}>
            <h1>מאתר נכסים אטרקטיבים</h1>
                 </div>
    }
    const filteredList = data.properties.filter(item => {
        if ((!search && !roomsFilter)) return true;
        if (search && roomsFilter) return unicodeToChar(item.address).startsWith(search) && item.num_rooms === parseFloat(roomsFilter)
        return (search && unicodeToChar(item.address).startsWith(search)) || (roomsFilter && item.num_rooms === parseFloat(roomsFilter))
    }).sort((item, itemB) => {
        return priceFilter ? +item.price - +itemB.price > 0 ? -1 : 1 : 1
    })

    return (
        <div>
            <div className='filters-container'>
                <SearchBar search={search} setSearch={setSearch}/>
                <RoomFilter roomsKinds={roomsKinds} roomsFilter={roomsFilter} setRoomsFilter={setRoomsFilter}/>
                <div>
                    <FormGroup style={{color: `black`, backgroundColor: 'whitesmoke', width: "210px"}}>
                        <FormControlLabel
                            control={<Switch onChange={() => setPriceFilter(priceFilter => !priceFilter)}/>}
                            label="מיין מהגבוה לנמוך"/>
                    </FormGroup>
                </div>
            </div>
            <div className='cards-container'>
                {(filteredList).map((apartment: PropertiesType) => (
                    <div key={apartment.id}>
                        <ApartmentCard apartment={apartment}/>
                    </div>
                ))}
            </div>

        </div>
    )
}
