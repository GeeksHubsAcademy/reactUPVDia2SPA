
import "./Login.css";

import { NavigateButton } from "../../common/NavigateButton/NavigateButton";

export const Login = () => {

    return (
        <div className="loginDesign">
            <NavigateButton 
                path={"/"}
                name={"Home"}
            />
            <NavigateButton 
                path={"/register"}
                name={"register"}
            />
        </div>
    )
}