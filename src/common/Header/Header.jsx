
import "./Header.css";

import { useNavigate } from 'react-router-dom';

export const Header = () => {

    const navigate = useNavigate();

    return (
        <div className="headerDesign">
            <div className="headerLink" onClick={()=>navigate("/")}>home</div>
            <div className="headerLink" onClick={()=>navigate("/login")}>login</div>
            <div className="headerLink" onClick={()=>navigate("/register")}>register</div>
        </div>
    )
}