import {useEffect, useState, useContext} from "react";
import {AddressType} from "../react-app-env";
import ApiDataContext from "../Context/ApiDataContext";
export default function CardsContainerLogic() {

    const data = useContext(ApiDataContext)
    const [jsonData, setJsonData] = useState<AddressType | null>(null)
    const [search, setSearch] = useState("")
    const [roomsFilter, setRoomsFilter] = useState("")
    const [priceFilter, setPriceFilter] = useState(false)



    const onlyUnique = (value: string | number, index: number, self: (string | number)[]) => {
        return self.indexOf(value) === index;
    }
    let roomsKinds = data?.properties.map(apartment => {
        if (typeof apartment.num_rooms === 'string') return parseInt(apartment.num_rooms)
        return apartment.num_rooms
    }).filter(onlyUnique)


    useEffect(() => {
        setJsonData(data)
    }, [data])

    return {
        roomsKinds,
        jsonData,
        search,
        setSearch,
        priceFilter,
        roomsFilter,
        setPriceFilter,
        setRoomsFilter,
        data
    }
}
