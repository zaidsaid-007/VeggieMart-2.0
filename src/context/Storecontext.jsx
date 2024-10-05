import { createContext } from "react";
import { catalogue } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{
    const contextValue = {
        catalogue
    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;