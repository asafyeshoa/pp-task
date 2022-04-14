import {useEffect, useState} from "react";
import {AddressType} from "../react-app-env";

export default function AppLogic(){
    const [jsonData, setJsonData] = useState<AddressType | null>(null)

    const getData = () => {
        fetch('transactions.json')
            .then(response => response.json())
            .then(data => {
                setJsonData(data)
            });
    }

    useEffect(() => {
        getData()
    }, [])
    return {jsonData}
}
