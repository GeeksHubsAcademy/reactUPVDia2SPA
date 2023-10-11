
import { NavigateButton } from "../../common/NavigateButton/NavigateButton";
import "./Home.css";

export const Home = () => {

    return (
        <div className="homeDesign">
            <NavigateButton 
                path={"/login"}
                name={"Login"}
            />
            <NavigateButton 
                path={"/register"}
                name={"register"}
            />
        </div>
    )
}