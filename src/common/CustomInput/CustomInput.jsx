
import "./CustomInput.css";

// import { useEffect } from "react";

export const CustomInput = ({design,type,name,placeholder,handlerFunction,errorFunction}) => {

    // useEffect(()=>{
    //     console.log(design, "sosdfasdfasdf");
    // },[]);

    return (
        <input 
            className={design}
            type={type}
            name={name}
            placehoder={placeholder}
            onChange={(e)=>handlerFunction(e)}
            onBlur={(e)=>errorFunction(e)}
        />
    )
}