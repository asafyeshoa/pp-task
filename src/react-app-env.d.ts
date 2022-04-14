/// <reference types="react-scripts" />

export interface AddressType {
    properties: PropertiesType[]
    total: number
}

interface PropertiesType {
    address: string
    elevator: number
    floor: number
    id: string
    num_floors: number
    num_rooms: number
    parking: string
    price: number
    sqm: number
}
