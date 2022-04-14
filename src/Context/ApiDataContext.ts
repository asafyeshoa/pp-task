import React from "react";
import {AddressType} from "../react-app-env";

const ApiDataContext = React.createContext<AddressType | null>(null);

export default ApiDataContext
