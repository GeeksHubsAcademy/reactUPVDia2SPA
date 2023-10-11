
import "./NavigateButton.css";

import { useNavigate } from 'react-router-dom';

export const NavigateButton = ({path, name}) => {

    const navigate = useNavigate();

    return (
        <div 
            className="navigateButtonDesign" 
            onClick={()=>navigate(path)}
        >
                {name}
        </div>
    )
}